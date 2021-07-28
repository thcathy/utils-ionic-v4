pipeline {
  agent {
    docker {
      image 'node:lts-buster-slim'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('NPM install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build ios') {
      steps {
        sh 'npx ionic capacitor build ios -- --prod'
      }
    }

  }
}