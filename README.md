# Cryptography for Code Rebels
A collection of cryptographic protocols, examples, and best practices. Use these methods to help secure your work, writing, code, ideas, and collaborations from those who are not invited to the party.

author: @gunnarpope


Each folder contains cryptographic methods for each language or protocol listed.

### Diffie-Hellman Key Exchange
Achieve perfect forward secrecy using the ephemeral Diffie-Hellman Key exchange.
    $ node javascript/DiffieHellman.js

### SSH Key Generation
Look at folder `ssh/` for instructions on how to setup SSH keys with a remote server to secure data in transit. Here's a quick example of how to generate a key pair to establish secure connections using SSH protocol.

    ~/repos/cryptography $ ssh-keygen -t rsa
    Generating public/private rsa key pair.
    Enter file in which to save the key: ~/.ssh/ex_rsa
    Enter passphrase (empty for no passphrase):
    Enter same passphrase again:
    Your identification has been saved in ~/.ssh/ex_rsa.
    Your public key has been saved in ~/.ssh/ex_rsa.pub.
    The key fingerprint is:
    SHA256:v3k+IdKFSNoAozOGd3YbHsGZ8QWsH349EBngJYE0Cts
    The key's randomart image is:
    +---[RSA 2048]----+
    |  . o+=*=++o     |
    | . = o*=o+o      |
    |. B E +*o. o     |
    | o = oo++ o .    |
    |      ooSo +     |
    |        +.+ +    |
    |         o.. o   |
    |           oo    |
    |          oo..   |
    +----[SHA256]-----+

Now, upload the key to your remote server at user 'demo' at IP 168.0.0.1

    $ ssh-copy-id demo@168.0.0.1
