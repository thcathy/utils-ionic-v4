pipeline {
  agent {
    docker {
      args '-v $HOME/.npm:/root/utils-ionic-v4-npm'
      image 'zenika/alpine-chrome:with-node'
    }
  }

  stages {
    stage('npm ci') {
      steps {
        sh 'npm ci'
      }
    }

    stage('build') {
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
    
    stage('build and archive iOS project') {
      steps {
        sh 'npx cap copy ios'
        zip zipFile: "ios-${(new Date()).format('yyyy-MM-dd')}.zip", dir: 'ios/App', archive: true
      }
    }
    
    stage('deploy to firebase') {
      environment {
        FIREBASE_DEPLOY_KEY = credentials('FIREBASE_DEPLOY_KEY')
      }
      steps {
        sh 'npm install firebase-tools'
        sh 'npx firebase deploy --token ${FIREBASE_DEPLOY_KEY}'
      }
    }

  }
}
