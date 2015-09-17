# Information Security 

The [Australian Cyber Security Centre](https://acsc.gov.au/) (ACSC) [2015 Threat Report](https://www.acsc.gov.au/publications/ACSC_Threat_Report_2015.pdf) provides an indication of the current security threats faced by Australian Government Agencies.
 * There are over 12 million internet subscribers and 21 million internet connected mobile devices in Australia
 * [CERT Australia](https://www.cert.gov.au/) responded to over 11,000 cyber security incidents affecting australian business in 2014.
 * [The Australian Signals Directorate](http://www.asd.gov.au/) (ASD) is responsible for responding to cyber security incidents affecting Australian Government Agencies.  ASD responded to 1131 incidents in 2014 - almost double the 2012 level.
 * The threats come from cyber adversaries including foreign states, serious organised crime, and motivated individuals.  The reported incidents include espionage, crime, attacks, and disruption.
 * The attack activities include phishing, remote access, malware, watering holes, denial of service, and hacktivism. 
 * The [Top 4](http://www.asd.gov.au/publications/protect/top_4_mitigations.htm) defence strategies, if applied correctly would have prevented 85% of reported incidents.

Cyber security incidents are increasing at a compound rate of about 30% per year.  As the number of government digital services increases, so does the "attack surface" and the likely number of security incidents.  The threat environment means that agencies building digital services must assume that the service will be attacked and must apply appropriate security measures to mitigate the potential consequences.

This guide is designed to assist agencies to design, build, and operate secure digital services.  The guide is focussed on application layer security practices that are the primary concern of the agile developmet team.  There is less focus on physical and network security that should be largely managed by the data centre service provider.  This guide draws on information from the ASD [Information Security Manual](http://www.asd.gov.au/infosec/ism/index.htm) (ISM) and from the the [Open Web Application Security Project](https://www.owasp.org) (OWASP). The intent is to provide a short suite of useful guidance material for agile development team.  The information presented in this guide is aligned with and in no way supersedes the ASD ISM which remains the authoritative reference.

There are a number of sub-guides that cover key security practices:
 * Threat Modeling - provides a methodology to identify potential threats and vulnerabilities.
 * Controls - provides an overview (with links) to the most important controls that mitigate security risks
 * Testing - provides guidance on tools and practices for ethical hacking to test your services for vulnerabilities.
 * Identity & Access Control - provides guidance on authentication and authorisation protocols such as [OIDC](http://openid.net/connect/) and common government platforms such as [VANguard](http://vanguard.business.gov.au/Pages/default.aspx).
 * Logging & Auditing - provides guidance on best practices for critical logging activities that will help detect and diagnose security incidents.
 

