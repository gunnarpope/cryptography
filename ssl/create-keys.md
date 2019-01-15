
## Create new SSL keys and upload them to Github or similar.
Create a pair of 4096-bit RSA keys in the .ssh/ folder.
Name the keys `id_rsa` and `id_rsa.pub`. Share the `.pub` file
and guard the private one with your life. Use xclip to copy only
the public key into memory and paste it into Github.

    ssh-keygen -t rsa -b 4096 -C "name@email.com"
    eval "$(ssh-agent -s)"
    ssh-add ~/.ssh/id_rsa
    xclip -sel clip < ~/.ssh/id_rsa.pub
    sudo apt-get install xclip
    xclip -sel clip < ~/.ssh/id_rsa.pub
