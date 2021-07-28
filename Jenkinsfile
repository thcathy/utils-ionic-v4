pipeline {
  agent {
    docker {
      image 'node:lts-buster-slim'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('NPM install') {
      parallel {
        stage('NPM install') {
          steps {
            sh 'npm install'
          }
        }

        stage('test') {
          steps {
            sh 'echo $(pwd)'
          }
        }

      }
    }

    stage('Build ios') {
      steps {
        sh 'npx ionic capacitor build ios --release'
      }
    }

  }
}