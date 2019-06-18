#!/bin/bash
DESTINATION="/var/www/abramstamper.com/public_html"
TARGET="/tmp/personal-site-build"
GIT_DIR="/home/abramjstamper/Documents/personal-site.git"
BRANCH="master"

while read oldrev newrev ref
do
# only checking out the master (or whatever branch you would like to deploy)
  if [ "$ref" = "refs/heads/$BRANCH" ];
  then
    echo "Ref $ref received. Deploying ${BRANCH} branch to production..."
     git --work-tree=$TARGET --git-dir=$GIT_DIR checkout -f $BRANCH

     cd $TARGET/web-app/
     cmd1="npm install"
     echo "Installing dependencies..."
     echo $cmd1
     $cmd1
     cmd2="npm run build"
     echo "Building react-application with react-scripts..."
     echo $cmd2
     $cmd2
     sleep 10
     echo "Removing old website files from ${DESTINATION}"
     cmd3="rm -rf $DESTINATION/*"
     echo $cmd3
     $cmd3
     echo "Deploying to ${DESTINATION}"
     cmd4="cp -r $TARGET/web-app/build/. $DESTINATION/"
     echo $cmd4
     $cmd4
     echo "Updated website is now active"
  else
    echo "Ref $ref received. Doing nothing: only the ${BRANCH} branch may be deployed on this server."
  fi
done