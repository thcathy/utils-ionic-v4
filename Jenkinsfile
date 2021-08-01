pipeline {
  agent {
    docker {
      args '-v $HOME/.npm:/root/utils-ionic-v4-npm'
      image 'cimg/node:16.5.0-browsers'
    }
  }

  environment {
      CHROME_BIN = '/usr/bin/google-chrome'
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
        junit 'src/TESTS*.xml'
      }
    }

    stage('deploy to firebase') {
      steps {
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
