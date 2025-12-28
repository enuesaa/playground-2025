#include <Arduino.h>
#include <M5Unified.h>
#include <M5ModuleLLM.h>

M5ModuleLLM module_llm;
String llm_work_id;

void setup()
{
    // code from
    // https://github.com/m5stack/M5Module-LLM/blob/main/examples/TextAssistant/TextAssistant.ino

    // たまに null が返ってくる

    M5.begin();
    M5.Display.setTextSize(2);
    M5.Display.setTextScroll(true);

    // int rxd = 18, txd = 17;  // CoreS3
    int rxd = M5.getPin(m5::pin_name_t::port_c_rxd);
    int txd = M5.getPin(m5::pin_name_t::port_c_txd);
    Serial2.begin(115200, SERIAL_8N1, rxd, txd);

    module_llm.begin(&Serial2);

    M5.Display.printf(">> Check ModuleLLM connection..\n");
    while (1) {
        if (module_llm.checkConnection()) {
            break;
        }
    }
    M5.Display.printf(">> Reset ModuleLLM..\n");
    module_llm.sys.reset();
    M5.Display.printf(">> Setup llm..\n");
    llm_work_id = module_llm.llm.setup();
}

void loop()
{
    static int i = 0;
    i++;
    std::string question = "What is " + std::to_string(i) + " + " + std::to_string(i) + " equal to?";

    M5.Display.setTextColor(TFT_GREEN);
    M5.Display.printf("<< %s\n", question.c_str());
    M5.Display.setTextColor(TFT_YELLOW);
    M5.Display.printf(">> ");

    module_llm.llm.inferenceAndWaitResult(llm_work_id, question.c_str(), [](String& result) {
        M5.Display.printf("%s", result.c_str());
    });
    M5.Display.println();
    delay(500);
}
