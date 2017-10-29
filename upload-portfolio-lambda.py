import boto3
from botocore.client import Config
import zipfile

def lambda_handler(event, context):
    sns = boto3.resource('sns')
    topic = sns.Topic('arn:aws:sns:us-east-1:040464660539:deployportfollioTopic')

    try:
        s3 = boto3.resource('s3', config=Config(signature_version='s3v4'))
        build_bucket = s3.Bucket('build-output.vanessahenson')
        portfolio_bucket = s3.Bucket('vanessahenson.ninja')

        # On Windows, this will need to be a different location than /tmp
        build_bucket.download_file('portfolliobuild.zip', '/tmp/portfolio.zip')

        with zipfile.ZipFile('/tmp/portfolio.zip') as myzip:
            for nm in myzip.namelist():
                obj = myzip.open(nm)
                portfolio_bucket.upload_fileobj(obj, nm, ExtraArgs={'ContentType':  'basestring'})
                portfolio_bucket.Object(nm).Acl().put(ACL='public-read')

        print 'Job well done'
        topic.publish(Subject="Portfollio Deployed", Message="Portfollio Successfully Deployed")

    except:
        topic.publish(Subject="Portfollio Failed", Message="Portfollio Was NOT deployed sucessfully")
        raise
