Blockly.Blocks['yaml_key_value'] = {
    init: function() {
        this.appendValueInput("KEY")
            .setCheck("String")
            .appendField("Key");
        this.appendValueInput("VALUE")
            .setCheck("String")
            .appendField("Value");
        this.setOutput(true, "YAML");
        this.setColour(160);
        this.setTooltip("A key-value pair for YAML.");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['yaml_key_value'] = function(block) {
    var key = Blockly.JavaScript.valueToCode(block, 'KEY', Blockly.JavaScript.ORDER_ATOMIC);
    var value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
    return `{${key}: ${value}}`;
};

var workspace = Blockly.inject('blocklyDiv', {
    toolbox: `
        <xml>
            <block type="yaml_key_value"></block>
        </xml>
    `
});

document.getElementById('exportButton').addEventListener('click', function() {
    var code = Blockly.JavaScript.workspaceToCode(workspace);
    var yamlContent = convertToYAML(code); // Convert to YAML format
    download('output.yaml', yamlContent);
});

function convertToYAML(code) {
    // Simple conversion logic; enhance as needed
    return code.replace(/{/g, '').replace(/}/g, '').replace(/:/g, ': ').replace(/,/g, '\n');
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
