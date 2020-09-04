# REST API

## Summary

- Project Archtecture
- Design Patterns
- Application flow
- Libraries

## Project Archtecture

This project differs from the classic mvc pattern and includes more divisions
that in it`s turn, are more specific

    |- src    # here goes the whole development code
        |--- controllers        # responsible for recieving the request and returning the response
        |--- database           # contains database specifications
            |--- entities       # classes that represents the "shape" of the database stored data
            |--- migrations     # contains the database "version control" files
            |--- index.ts       # database connection

        |--- errors             # contain the custom error classes
        |--- repositories       # responsible for interacting directly with the database details
        |--- services           # responsible for all the business rule of the application
        |--- routes             # responsible for defining which classes have to deal with a request
        |--- server.ts          # the entry point of the system

## Design Patterns

Here is possible to find two famous design patterns, which are the service pattern and
the repository pattern.

**Service Pattern**: We create classes the contain all of the business rule involved
on a task, which makes easier to implement new ones or maintain the current rules.
They have only one method (execute) and must not know about any kind of specification
details of other layers.

**Repository Pattern**: We create classes that have the only purpouse of interacting
(store, delete, list, ...) with the database and it's implementation details. Every time we
want to execute some query on our database, we should do it using repositories, so we can
know exactly where to look for an error involving the database or where to include new
similar features.
