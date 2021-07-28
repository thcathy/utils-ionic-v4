pipeline {
  agent {
    docker {
      args '-v $HOME/.npm:/root/utils-ionic-v4-npm'
      image 'zenika/alpine-chrome:with-chromedriver'
    }

  }
  stages {
    stage('npm ci') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Build ios') {
      steps {
        sh 'npx ionic build --prod'
      }
    }

    stage('test') {
      steps {
        sh 'npm run test-ci'
        echo 'collect test report'
      }
    }

    stage('deploy to firebase') {
      steps {
        waitUntil()
        echo 'deploy to firebase'
      }
    }

    stage('build iOS') {
      steps {
        echo 'print iOS'
      }
    }

  }
}