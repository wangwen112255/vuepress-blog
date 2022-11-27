#!/bin/bash

array=(${1//-/ }) 

# for var in ${array[@]}
# do
#    echo $var
# done 

if [ -n "${array[1]}" ];
then
echo ${array[1]}
echo "End"
fi
name=${array[0]}
branch=${array[1]}
echo $name;
echo $branch;
