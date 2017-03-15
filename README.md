# Project Title

Integration of ChaCha20-Poly1305 Cipher Suites into a DTLS Stack for Resource-constrained devices
The tinydtls stack is a 6LBR copy of https://github.com/cetic/tinydtls

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

```
$ git clone https://git.ivesk.hs-offenburg.de/tinydtls/tinydtls-ivesk.git

```


### Prerequisites

What things you need to install and how to install them

```
$ sudo apt-get install autoreconf

$ sudo apt-get install gcc

```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
$ autoreconf

$ ./configure

$ make

```

## Running the tests

To run the automated tests for this stack you can find a DTLS Client and Server in /tests directory

### End to end tests

The following tests run a DTLS Server and Client with a successful Handshake  

###### Server
```
$ ./tests/dtls-server
	OR for debugging purposes
$ ./tests/dtls-server -v9
```

###### Client
```
$ ./tests/dtls-client 127.0.0.1
 OR for debugging purposes
$ ./tests/dtls-client 127.0.0.1 -v9
```



## Authors

* **Cetic** - *Initial work* - [Cetic](https://github.com/cetic/tinydtls)
* **Youssef REKIK** - *hopefully successful Integration of CHACHA20-POLY1305 with DTLS* - [Youssef REKIK](https://github.com/youssefrekik)

## License

This project is licensed under the GPL License 

## Acknowledgments

* Dipl.-Phys. Andreas Walz
