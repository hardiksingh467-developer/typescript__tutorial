API's are like doors into your system
If u leave them unprotected then attackers will come

1. Rate Limiting: per endpoint, per IP address, overall to mitigate DDoS(per service)
2. CORS(Cross Origin Resource Sharing): Only allow your own Frontend URL to access your API's
3. SQL and NoSQL injections(SELECT * FROM users WHERE username = 'admin' --' AND password = '123'): use ORM 
4. Firewalls: use AWS 
5. VPN: Making API's accessible over a particular network(such as Admin panel API's)
6. CSRF(Cross Site Request Forgery): Another site may use your cookie and make API calls, use CSRF in combination with session cookies
7. XSS(Cross site Scripting, Injecting scripts into webPages): lets say we have a comment section and any text field, then we can write a script in those text fields 


Using of HTTPS results in data encryption between client and server
Use OAuth2 for authorization
use WebAuthN
Use levelled API-Key, where each key has specific permissions or scopes defined
Rate Limiting: can embed in APi key
API versioning
Allow Listing
OWASP API security
Use APi Gateway: Security policy Enforcements, Rate Limiting, Authentication, Traffic Management, Caching, Logging, Monitoring, 
Error Handling: Generic messages
Input Validation