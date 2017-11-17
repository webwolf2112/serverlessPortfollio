import boto3
from botocore.client import Config
import zipfile

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:040464660539:deployportfollioTopic')

    location = {
        "bucketName": "build-output.vanessahenson",
        "objectKey": "portfolliobuild.zip"
    }

 def getFileType(file):
    if file.endswith(".css"):
           return "text/css"
    elif file.endswith(".html"):
            return "text/html"
    elif file.endswith(".js"):
            return "application/javascript"
    else:
        return "basestring"

    try:
        job = event.get('CodePipeline.job')

        if job:
            for artifact in job["data"]["inputArtifacts"]:
                if artifact["name"] == "MyAppBuild":
                    location = artifact["location"]["s3Location"]

        print "Building Bucket Location " + str(location["bucketName"])
        s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))
        build_bucket = s3.Bucket(location["bucketName"])
        portfolio_bucket = s3.Bucket('vanessahenson.ninja')

        # On Windows, this will need to be a different location than /tmp
        build_bucket.download_file(location["objectKey"], '/tmp/portfolio.zip')

        with zipfile.ZipFile('/tmp/portfolio.zip') as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                contentType = getFileType(nm);
                portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType':  contentType})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

        print 'Job well done'
        topic.publish(Subject="Portfollio Deployed", Message="Portfollio Successfully Deployed")
        if job:
            codepipeline = boto3.client("codepipeline")
            codepipeline.put_job_success_result(jobId=job["id"])

    except:
        topic.publish(Subject="Portfollio Failed", Message="Portfollio Was NOT deployed sucessfully")
        raise
