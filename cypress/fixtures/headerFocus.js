export default {
    "header": {
        "url": "/components/header/with-mixed-levels-of-navigation/preview",
        "tests": {
            "top level links": {
                "desktop": ["tab", "tab", "tab", "tab", "tab"],
                "mobile": ["tab", "tab", "enter", "tab", "tab", "tab", "tab", "enter", "tab", "tab"]
            },
            "second level links": {
                "desktop": ["tab", "tab", "tab", "enter", "tab", "tab", "tab", "tab", "tab", "tab", "enter", "tab", "tab"],
                "mobile": ["tab", "tab", "enter", "tab", "tab", "tab", "tab", "enter", "tab", "tab"]
            }
        }
    }
}