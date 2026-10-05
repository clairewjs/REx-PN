"""Generate hashes locally. Never prints or writes your password."""
import getpass, hashlib, secrets
password = getpass.getpass('Choose Claire instructor password (12-128 characters): ')
if not 12 <= len(password) <= 128:
    raise SystemExit('Password must be 12-128 characters.')
if password != getpass.getpass('Confirm password: '):
    raise SystemExit('Passwords do not match.')
salt = secrets.token_hex(16)
print('INSTRUCTOR_PASSWORD_SALT:', salt)
print('INSTRUCTOR_PASSWORD_HASH:', hashlib.pbkdf2_hmac('sha256', password.encode(), salt.encode(), 100000).hex())
print('Put these values in Cloudflare secrets. Do not commit them to GitHub.')
