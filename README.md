<div align="center">
  <img width="100px" src="/assets/moe.png" />
  <h2> Moec WhatsApp Template </h2>
</div>


> **warning** This project is provided for educational purposes only.
> The usage of code within this project is at the user's own risk.
> The code author is not responsible for any damage or issues that may arise.

Moec is a simple and easy-to-set-up WhatsApp template.

## Installation
To get started with Moec, follow these steps:

1. Clone this repository to your local machine using the following command *make sure you have installed git and nodejs on your mechine if dont have [install here](/guide/install.md):
``` bash
git clone https://github.com/miruchigawa/moec.git
```

2. Navigate to the project directory
``` bash
cd moec
```

3. Install the required dependencies using a package manager like yarn:
``` bash
yarn install 
```

4. Copy configuration file
``` bash 
cp -i config.example.js config.js
```

5. Fill all configuration file eg. prefix, owner_id on [config.js](/src/config.example.js)

6. Now start application
``` bash
node src/index.js
```

[learn more](/guide)

## Contributing
We welcome contributions from the community to improve and enhance the project. If you're interested in contributing, please follow these guidelines:

### Bug Reports and Feature Requests
If you find a bug or have a feature request, please open an issue. Provide as much detail as possible, including steps to reproduce the issue or a clear description of the requested feature.

### Pull Request
* Fork the repository and create a new branch from `main`.
* Make your changes and ensure the code is well-tested.
* Create a pull request, referencing the related issue if applicable.
* Ensure your pull request description is clear and includes information about the changes you've made.

### Coding Guidelines
Please follow our coding guidelines to maintain consistency within the project. Ensure your code is well-documented and formatted.

## License
This project under [MIT License](/LICENSE)

## To-Do
See [To-Do List](/guide/todo.md)