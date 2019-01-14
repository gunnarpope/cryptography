# another great example from Bill Buchanan
# https://medium.com/asecuritysite-when-bob-met-alice/the-keys-to-your-castle-and-your-backdoor-front-door-and-side-door-46eeec3f620f

import os
import sys

from Crypto.PublicKey import RSA
import math, random

type='OpenSSH'

print('Generate public key (1,204 bits)') 
print()
key = RSA.generate(1024, os.urandom)

pubkey = key.publickey()

print
print("Public key: \n",pubkey.exportKey(type))

print("\nPrivate key (PEM)")
print(key.exportKey('PEM'))

if (type=='OpenSSH'):
	p=2**1024 - 2**960 - 1 + 2**64 * int(math.floor( 2**894 * math.pi + 129093 ))
	g=2
	print("\nDiffie Hellman Group 1 SHA1 key exchange")
	print("Prime: ",p)
	print("g: ",g)
	x = random.getrandbits(512)
	y = random.getrandbits(512)
	print("Bob's random value (512-bit):",x)
	print("Alice's random value (512-bit):",y)
	e = pow(g, x, p)
	K= pow(g,y,p)
	print("Shared key:",K)
