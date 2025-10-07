# DevOps Assessment - Next.js Application

This repository contains a simple **Next.js** application containerized using **Docker**, deployed to **Kubernetes (Minikube)**, and ready to be automated via **GitHub Actions**.

---

## Table of Contents
- [Project Setup](#project-setup)
- [Docker](#docker)
- [Kubernetes Deployment](#kubernetes-deployment)
- [Minikube Testing](#minikube-testing)
- [GitHub Container Registry](#github-container-registry)
- [Notes](#notes)

---

## Project Setup

1. Clone the repository:

git clone https://github.com/Xcode83/devops-assessment
cd devops-assessment

Install dependencies and run locally:

npm install
npm run dev


Visit http://localhost:3000
 to confirm the app works locally.

Docker

Build the Docker image:

docker build -t nextjs-app:latest .


Run the Docker container locally:

docker run -p 3000:3000 nextjs-app:latest


Open http://localhost:3000
 in your browser.

Kubernetes Deployment
1. Use Minikube's Docker environment
eval $(minikube docker-env)


This ensures Kubernetes can access the Docker image you just built.

2. Apply manifests
kubectl apply -f k8s/


Deploys the application using deployment.yaml and exposes it via service.yaml.

3. Verify pods
kubectl get pods


All pods should show Running.

Minikube Testing

Start Minikube (if not already running):

minikube start --driver=docker


Access the service:

minikube service nextjs-service


This opens your app in the browser using Minikube's NodePort.

GitHub Container Registry (Optional)

Build and tag the image for GHCR:

docker build -t ghcr.io/YOUR_USERNAME/devops-assessment:latest .


Log in to GHCR:

echo $GHCR_TOKEN | docker login ghcr.io -u YOUR_USERNAME --password-stdin


Push the image:

docker push ghcr.io/YOUR_USERNAME/devops-assessment:latest


Kubernetes can now pull the image directly from GHCR.
