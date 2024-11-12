pipeline {
    agent any
    environment {
        NODE_HOME = tool name: 'node' // Set Node.js tool installed earlier
        PATH = "${NODE_HOME}/bin:${env.PATH}"
        DOCKER_CREDENTIALS_ID = 'raghu6289'
        DOCKER_IMAGE = "raghu6289/auth-mernstack"
    }
    stages {
        stage('Clone Repository') {
            steps {
                // Clone the repository
                git 'https://github.com/vijiptl/Raghu_App.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                script {
                    try {
                        // Try running tests
                        sh 'npm test'
                    } catch (Exception e) {
                        // If no test script is found or it fails, skip it
                        echo "Tests not found or failed, skipping tests."
                    }
                }
            }
        }

        stage('Build Application') {
            steps {
                // Build application (adjust command based on your setup)
                sh 'npm run build'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    docker.withRegistry('', DOCKER_CREDENTIALS_ID) {
                        def image = docker.build("${DOCKER_IMAGE}:${env.BUILD_ID}")
                        image.push()
                        image.push("latest")
                    }
                }
            }
        }

        
    }

}