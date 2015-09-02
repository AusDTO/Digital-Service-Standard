#!/bin/bash

#Clean out the cruft
#cd www.dto.gov.au
#rm blog/  budget/  comment/  filter/  news-media/    sites/  user/ -r
#rm feedback* -r
#leaving just... design-guides/  node/  standard/


#FILENAME
#echo "$INFILE"


for x in `find . do | grep -i "\.htm[l]$"`;
do
  echo $x
  CLEAN=$(echo hxnormalize -xs $x)
  TITLE=$(echo $CLEAN | hxselect "meta" | sed 's/name="dcterms\.title"/id="theDocummentTitle"/g' | hxselect "#theDocummentTitle" | grep -Po 'content="\K.*?(?=")' |  sed 's/ /_/g' | tr '[:upper:]' '[:lower:]')
  #echo $CLEAN | hxselect '.main-content' | (read DIV; pandoc -f html -t markdown_github -s -o $TITLE.md $DIV)
  echo "$TITLE"
  #FILENAME=$(basename -s .html "$INFILE")
  #DIRNAME=$(dirname $INFILE)
  #echo "$FILENAME ---> $TITLE"
  #echo "$DIRNAME ////// $TITLE.md"
  #echo "\"$FILENAME\",\"$TITLE\"" >> file_to_title.csv

  #pandoc -f html -t markdown_github -s -o $TITLE.md temp.html
done

#Once converted then run a script to sed all the "file name".html references to "title name".md
