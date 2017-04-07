# Project Title

Integration of ChaCha20-Poly1305 Cipher Suites into a DTLS Stack for Resource-constrained devices
The tinydtls stack is a 6LBR copy of https://github.com/cetic/tinydtls

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
```
$ git clone https://git.ivesk.hs-offenburg.de/tinydtls/tinydtls-ivesk.git
```



### Prerequisites

What things you need to install and how to install them

First things First Libsoduim is a must :

 1 - Download a [tarball of libsodium](https://download.libsodium.org/libsodium/releases) : libsodium-1.0.11.tar.gz was used for testing

```
$ ./configure

$ make && make check

$ sudo make install
```

 2 - Autoreconf is needed to generate the makefile :

```
$ sudo apt-get install autoreconf
```

### Installing

To get a development env running :

```
$ autoreconf

$ ./configure

$ make
```


## Running the tests

To run the automated tests for this stack you can find a DTLS Client and Server in /tests directory

### End to end tests

The following tests run a DTLS Server and Client with a successful Handshake  
The stack defaults to port : 20220
Adding -v9 sets the Verbosity level to the highest

### Server
```
$ ./tests/dtls-server
	OR for debugging purposes
$ ./tests/dtls-server -v9
```

### Client
```
$ ./tests/dtls-client 127.0.0.1
 OR for debugging purposes
$ ./tests/dtls-client 127.0.0.1 -v9
```



## Authors

* **Cetic** - *Initial work* - [Cetic](https://github.com/cetic/tinydtls)
* **Youssef REKIK** - *Successful Integration of TLS_PSK_WITH_CHACHA20_POLY1305_SHA256 * - [Youssef REKIK](https://github.com/youssefrekik)

## License

This project is licensed under the GPL License 

## Acknowledgments

* Dipl.-Phys. Andreas Walz
