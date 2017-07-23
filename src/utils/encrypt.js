import crypto from 'crypto';

export function getSalt() {
  crypto.randomBytes(128, async (err, salt) => {
    if (err) {
      console.log(err);
    }
    salt = await salt.toString('hex');
    return salt;
  });
}

export function getHash(pwd, salt) {
  crypto.pbkdf2(pwd, salt, 4096, 256, async (err, hash) => {
    if (err) {
      console.log(err);
    }
    hash = await hash.toString('hex');
    return hash;
  });
}
