# Calendar Picker

The calendar picker component allows users to select a single date from a calendar interface. It includes a text input for manual entry and a calendar dialog for visual selection.

## Usage

```njk
{% from "lbcamden/components/calendar-picker/macro.njk" import LBCamdenCalendarPicker %}

{{ LBCamdenCalendarPicker({
  id: "date",
  name: "date",
  label: {
    text: "When will the event happen?"
  },
  hint: {
    text: "For example, 15/06/2023"
  }
}) }}
```

## Arguments

This component accepts the same arguments as the [GOV.UK Input component](https://design-system.service.gov.uk/components/text-input/), with the addition of:

| Name | Type | Description |
|---|---|---|
| classes | string | Classes to add to the container. |
| attributes | object | HTML attributes to add to the container. The input includes `placeholder="dd/mm/yyyy"` by default. |
| id | string | The ID of the input element. |
| name | string | The name of the input element. |
| value | string | Initial value of the input. |
| label | object | params for the `govukLabel` component. |
| hint | object | params for the `govukHint` component. |
| errorMessage | object | params for the `govukErrorMessage` component. |
