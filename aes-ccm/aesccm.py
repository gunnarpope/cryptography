import os
from cryptography.hazmat.primitives.ciphers.aead import AESCCM

data = '' 
with open('myfile.txt', 'r', encoding='utf-8') as f:
	data = f.read()
	for line in f.readline():
		data += line	

aud  = b"authenticated but unencrypted data"
key = AESCCM.generate_key(bit_length=128)
aesccm = AESCCM(key)
nonce	= os.urandom(13) # NIST recommends 96-bit
edata = aesccm.encrypt(nonce, bytes(data,'utf-8'), aud)
print('Original File Contents')
print(bytes(data, 'utf-8'))
print('Encrypted Data')
print('*****************') 
print(edata)
print('*****************') 
print('Unencrypted Data')
print('*****************') 
print(aesccm.decrypt(nonce, edata, aud))
print('*****************') 


