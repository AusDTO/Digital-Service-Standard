#!/bin/bash



#FILENAME
#echo "$INFILE"


for x in `find . do | grep -i "\.htm[l]$"`;
do
  INFILE=$x
  echo $x

  hxnormalize -xs $INFILE | hxselect ".main-content" > temp.html
  TITLE=$(hxnormalize -x $INFILE | hxselect "meta" | sed 's/name="dcterms\.title"/id="theDocummentTitle"/g' | hxselect "#theDocummentTitle" | grep -Po 'content="\K.*?(?=")' |  sed 's/ /_/g' | tr '[:upper:]' '[:lower:]')
  FILENAME=$(basename -s .html "$INFILE")
  DIRNAME=$(dirname $INFILE)
  #echo "$FILENAME ---> $TITLE"
  echo "$DIRNAME ////// $FILENAME.md"
  echo "\"$FILENAME\",\"$TITLE\"" >> file_to_title.csv

  pandoc -f html -t markdown_github -s -o $FILENAME.md temp.html


done



#INFILE=$(cat)





#Once converted then run a script to sed all the "file name".html references to "title name".md
