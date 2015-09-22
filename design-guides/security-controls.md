# Security Controls

Security controls define protection measures against security threats.  The authoritative source for security controls for Australian government agencies is the Australian Signals Directorate (ASD) [Information Security Manual](http://www.asd.gov.au/infosec/ism/) (ISM).  The ISM specifies over 1000 distinct security controls that are grouped into the following categories.
* ICT governance  
* Physical security
* Personnel security
* Communication infrastructure security
* IT system security - which includes
 * COTS product security
 * Media security
 * Network security
 * Email security
 * Offsite security
 * Cryptography
 * Software security
 * Cross-domain security
 * Content filtering
 * Access control

Whilst all of these are important from the perspective of an entire agency, only a subset are within the control of an application development team.  In general, the team will depend on existing agency controls for physical, personnel, communications,  and network infrastructure security.  The focus for the development team is to design, build and deploy secure software applications.   In that context, the most relevant controls are defined in the last four categories in the list (software security to access control).  

## Why Must I?

ISM compliance is a mandatory requirement for all Australian Government ICT applications.  Furthermore, criteria 6 of the [Digital Service Standard](https://www.dto.gov.au/standard) requires that appropriate measures are in place to protect user information and privacy.

## How Do I?

Agencies should:  
* Use the [threat model](threat-modeling.md) developed as part of the design exercise to to identify the relevant controls to mitigate your identified risks.
* Consider security as an integral part of the design process and not only as a post-build hardening activity. Pay particular attention to the identification of privileged roles, what permissions the roles have, and how the permissions are granted.
* Leverage guidance from the [Open Web Application Security Project](https://www.owasp.org/index.php/Main_Page) (OWASP). Pay particular attention to the [OWASP top 10](https://www.owasp.org/index.php/Category:OWASP_Top_Ten_Project) - the application of which will mitigate the majority of threats.  ASD ISM Control 971 states that "For web application development, agencies should follow the Open Web Application Security Project guides to building secure web applications."
* Complete penetration testing ("ethical hacking") at the alpha-beta transition and again at the beta-live transition.  Do both "black box" testing (where the tester has no previous knowledge of the application and no privileged access roles) and "white box" testing (where the tester is provided with design documentation and login credentials for each role).
