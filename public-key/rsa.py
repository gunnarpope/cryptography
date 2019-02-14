# rsa.py
# an RSA encryption/decryption example in Python
# author: @gunnarpope
# date: 02/13/19

from Crypto.Cipher import PKCS1_OAEP
from Crypto.PublicKey import RSA
import math

# generate the private key
key = RSA.generate(2048)
print('Private Key: ', key)

# generate the public key
pubkey = key.publickey() # pub key export for exchange
print('Public Key: ', pubkey)

# export the private key in PEM format
pemprivkey = key.exportKey('PEM')
print()
print(pemprivkey)

# export the public key in PEM format
pempubkey = pubkey.exportKey('PEM')
print()
print(pempubkey)


# create a message and sign it using the RSA PKCS#1 OAEP standard
message = "crypto just rocks, y'all"
print('The Orininal Message:')
print(message)

# encrypt the message and print it
cipher = PKCS1_OAEP.new(key)
ciphertext = cipher.encrypt(message.encode('utf-8'))
print()
print('Encrypted Message:')
print(ciphertext)


# encmessage = RSA.encrypt(message)
cipher = PKCS1_OAEP.new(key)
decrypted = cipher.decrypt(ciphertext)
print()
print('Decrypted Message: ')
print(decrypted)
