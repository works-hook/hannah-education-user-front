yarn build

docker build --platform linux/amd64 -t coals0329/student-front-service .
docker push coals0329/student-front-service

ssh -i ~/.ssh/hannah-education.pem ubuntu@3.35.249.142 "~/education-front/student-front-service-deploy.sh"
