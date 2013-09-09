#!/bin/bash

# Simple script to copy SNAPSHOT jar builds of aura libs into repo
# Repo folder used as local repository for Heroku

MAVEN_REPO=~/.m2/repository

AURA_DIR=$MAVEN_REPO/org/auraframework

cp -rf $AURA_DIR repo/org