
## How to create ssh keys and upload them to a remote server or website.


by: gunnarpope | telegram: @gunnarpope

1/16/19

In this tutorial, we will use OpenSSH to generate an ssh key-pair that is used to secure and encrypt data from your computer to a remote server. To do this, we need to create a two keys: a public RSA key and a private RSA key. The public one you want to share with everyone and the private one is for your eyes only. Let's begin!

To create a pair of 4096-bit RSA keys in the .ssh/ folder.

    ~/repos/cryptography/ssh $ ssh-keygen -t rsa -b 4096 -C "name@email.com"
    Generating public/private rsa key pair.
    Enter file in which to save the key (~/.ssh/id_rsa): ~/.ssh/mykey_rsa
    Enter passphrase (empty for no passphrase):
    Enter same passphrase again:

When asked what file to save the key to, I specified the file using the full path of `~/.ssh/mykey_rsa`.

    Your identification has been saved in ~/.ssh/mykey_rsa.
    Your public key has been saved in ~/.ssh/mykey_rsa.pub.
    The key fingerprint is:
    SHA256:+jduGhDd4iliiIwju6t30JZmFVssh4moNczINbOYhwM name@email.com
    The key's randomart image is:
    +---[RSA 4096]----+
    |E+.= . +         |
    |o.X = =.+.       |
    | B +  .*o .      |
    |+.o.  oo o       |
    |=...ooo S        |
    |.o..*. +         |
    |.  =  . .        |
    | .. .  . .+      |
    |=o .    o=..     |
    +----[SHA256]-----+



This key (`~/.ssh/mykey.pub`) is your public RSA key which needs to be uploaded to your server or remote connection. They will encrypt messages to you using this key and you will use your private key (`~/.ssh/mykey`) to decrypt them. Guard that one with your life and don't pass it across the web.

You now need to add your public key to your remote server. We do this using the `ssh-copy-id` command. For this task, I will send it to a dummy remote IP address of `0.0.0.0`. Assuming that you have a user account on the remote server located at (`0.0.0.0`, in this case), use the following command to publish your public key to the remote server. My username is `myname` in this example.


    ~ $ ssh-copy-id -i ~/.ssh/id_rsa.pub myname@0.0.0.0
    /usr/bin/ssh-copy-id: INFO: Source of key(s) to be installed: "/home/gp/.ssh/id_rsa.pub"
    /usr/bin/ssh-copy-id: INFO: attempting to log in with the new key(s), to filter out any that are already installed
    /usr/bin/ssh-copy-id: INFO: 1 key(s) remain to be installed -- if you are prompted now it is to install the new keys
    sign_and_send_pubkey: signing failed: agent refused operation
    myname@0.0.0.0's password:

    Number of key(s) added: 1

    Now try logging into the machine, with:   "ssh 'myname@0.0.0.0'"
    and check to make sure that only the key(s) you wanted were added.


Cool, you just added your pubkey to the remote server. On the remote, you will see your public key in the `~/.ssh/authorized_keys` file on a Linux machine. Now, try logging in and you should not have to enter a password by hand if the ssh key is setup correctly.

Add this key to your ssh agent, so it knows where to look for the key.     

    $ eval "$(ssh-agent -s)"
    $ ssh-add ~/.ssh/id_rsa

 Now, log in.

    $ ~ $ ssh 'myname@0.0.0.0'
    $ Last login: Tue Jan 15 12:35:57 2019 from x-x-x-x-x.net
    [myname@server ~]$

Great. Your all set! You are now securely logged into the remote server and are using secure communication. If you want to copy-paste the public key to a remote website or server instead, you can use the following method.

Copy the public key to a secure clip board, using `xclip` ( or similar). This helps copy the correct part of the public key to upload to the server.

    $ sudo apt-get install xclip
    $ xclip -sel clip < ~/.ssh/id_rsa.pub
