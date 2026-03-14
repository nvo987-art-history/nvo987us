# NVO987 Architecture

The NVO987 infrastructure follows a decentralized architecture built around a single identity authority and multiple functional nodes.

The infrastructure identity is defined by the decentralized identifier:

did:web:identity.nvo987.us

This DID represents the primary identity of the infrastructure and is hosted at the identity node.


## Identity Layer

Identity services are provided by:

https://identity.nvo987.us

This node publishes the DID document and manages identity-related services such as:

- identity profile
- verification services
- document repositories
- machine-readable metadata
- knowledge graph endpoints


## Infrastructure Root

The root infrastructure domain is:

https://nvo987.us

This domain serves as the central entry point for the infrastructure and references the different nodes that compose the system.


## Node Architecture

The infrastructure is composed of several specialized nodes.

identity.nvo987.us  
Identity and verification services.

knowledge.nvo987.us  
Machine-readable knowledge infrastructure hosting structured datasets and research metadata.

lab.nvo987.us  
Experimental research environment used for testing new technologies and infrastructure components.

nvo987.fr  
Non-profit organization associated with the infrastructure.


## Identity Authority

All infrastructure nodes reference the same decentralized identity:

did:web:identity.nvo987.us

This identity acts as the authoritative identity layer for the entire infrastructure.


## Machine Readable Infrastructure

Machine-readable infrastructure metadata is published at:

metadata/infrastructure.jsonld

This file describes the relationship between the domains composing the infrastructure.


## Design Principles

The infrastructure is designed around the following principles:

- decentralized identity
- verifiable digital infrastructure
- machine-readable research publication
- structured knowledge representation
- open and transparent architecture
