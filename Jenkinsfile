pipeline {
  agent {
    docker {
      image 'node:lts-buster-slim'
      args '-v $HOME/.npm:/root/utils-ionic-v4-npm'
    }

  }
  stages {
    stage('npm ci') {
      steps {
        sh 'npm ci'
      }
    }

    stage('build') {
      parallel {
        stage('Build ios') {
          steps {
            sh 'npx ionic build --prod'
          }
        }

        stage('list .npm') {
          steps {
            sh 'ls -rtla ~/.npm'
          }
        }

      }
    }

    stage('test') {
      steps {
        sh 'npm run test-ci'
      }
    }

  }
}