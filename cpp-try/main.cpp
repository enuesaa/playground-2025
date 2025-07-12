#include <iostream>
#include <string>

int main(int argc, char* argv[]) {
    if (argc != 4) {
        std::cout << "Usage: ./calc [add|sub|mul|div] num1 num2\n";
        return 1;
    }
    std::string operation = argv[1];

    double num1 = std::stod(argv[2]);
    double num2 = std::stod(argv[3]);

    double result = 0;

    if (operation == "add") {
        result = num1 + num2;
    } else if (operation == "sub") {
        result = num1 - num2;
    } else if (operation == "mul") {
        result = num1 * num2;
    } else if (operation == "div") {
        if (num2 == 0) {
            std::cerr << "Invalid argument supplied\n";
            return 1;
        }
        result = num1 / num2;
    } else {
        std::cerr << "unknown command: " << operation << "\n";
        return 1;
    }
    std::cout << result << "\n";

    return 0;
}
