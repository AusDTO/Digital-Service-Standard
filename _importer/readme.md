#Digital Service Standard Importer

##Basic information
The content of this folder is to contain tools that are being used to
convert and migrate the existing html digital service standard to a cleansed
markup version for future collaborative documentation and automatic generation of various formats.

The process is not fully automated and is still under development. It is not expected to ba
an ongoing process (once converted we will just use the results going forward) so is lightweight and
*"pragmatic"* :-).

##Steps
 1. wget the existing site
 2. Covert the document with `node web2md.js --path <<wget target directory>>`
 3. Fix link references with `node fixlinks.js --path <<wget target directory>>`
 4. Clean up and copy results to root directory
 5. Publish to gh-pages branch of this repository.

 >Note: There appears to be a lot extraneous information captured in the wget
 (comments, blogs) which does not need to be converted. It is expected that some
 automation will be added to assist with this too.
