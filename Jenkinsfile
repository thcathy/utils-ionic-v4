pipeline {
  agent any
  stages {
    stage('NPM install') {
      steps {
        sh 'npm install'
      }
    }

    stage('Build ios') {
      steps {
        sh 'ionic capacitor build ios --release'
      }
    }

  }
  environment {
    PATH = '/usr/local/bin:/usr/bin:/bin'
  }
}