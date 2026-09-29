# FrameTask

- [FrameTask](#frametask)
  - [FrameTask capabilities](#frametask-capabilities)
  - [FrameTask attributes](#frametask-attributes)
  - [Column Template attributes](#column-template-attributes)
  - [FrameTask Datastores](#frametask-datastores)
    - [FrameTask properties when using Datastores](#frametask-properties-when-using-datastores)


The `FrameTask` component acts as a replacement from the `SquareTask` component. It uses the latest default forms and alias concepts, and requires less or no configuration compared to the `TableTask` component. It can also link to workspaces when in read-only mode.

(screenshot of a random component with code)

:::tip
- Note that the `FrameTask` component is not a replacement for the `SquareTask` component.
- `FrameTask` should be used inside form fields. All data changes inside the form is updated only when the form is saved.
:::

## FrameTask capabilities

Compared to the `SquareTask` component, the personalization of `FrameTask` lets you use *Add new* buttons and check if your user has **CREATE** permissions on objects that you want to create. The class labels used to perform these actions in `FrameTask` are on an existing code type, but can be changed if necessary.

:::tip
Link slots (e.g., <template#link:label={...}>) **DO NOT** need to be configured in order to edit newly created items. This is because the default configuration uses the default object form to create a new object.
:::

Additional `FrameTask` capabilities:

- Datastores can be used for better data representation.
- You can edit existing objects inside the form, with locks to prevent any data inconsistencies.
- `FrameTask` contains visual indicators that inform you when an object is updated.
- When `FrameTask` is in read-only mode, the selected mode is transferred to any associated forms of existing items using this component.

Even though `FrameTask` does not require any configuration, several properties are available that can be adjusted by **Configurators**:

```vue
<FrameTask
    :columns="[
        {attribute: 'name'},
        {attribute: 'role'},
        {attribute: 'endDate'},
      ]"
      :pushAssociate='true'
      :options="{
        filtering: [{property: 'label', value: 'TL'}],
      }"
      :menuItems='false'
      :pagination='true'
      length='fl'
      enableFiltering
      enableSearch
      enableFieldSearch
      wrap
      :resizable="false"
      :optionSelect={
        size:'md',
        fullScreen: true,
        autoAdjust: true,
      }"
>
```

## FrameTask attributes

| Field | Description |
| -------- | ------- |
| ``pushAssociate`` | Set to `true` to enable associating existing links.
| ``menuItems`` | Enables or disables menu items. Boolean: ``true`` or ``false``.
| ``pagination`` | Enable pagination. Boolean: ``true`` or ``false``.
| ``enableFiltering``, ``enableSearch``, ``enableFieldSearch``| Enables filtering of objects, search by object, and search by specific field of an object in `FrameTask`. Boolean: ``true`` or ``false``. 
| ``resizable`` | Enables or disables the resize capability. Boolean: ``true`` or ``false``.
| ``size`` | Select the size of ``FrameTask``. Options: ``sm`` (small), ``md`` (medium), ``lg`` (large).
|``fullScreen``| Enable or disable the fullscreen mode. Boolean: ``true`` or ``false``.
|``autoAdjust``| Enable or disable the auto adjustment capability. Boolean: ``true`` or ``false``.

The column templates for `FrameTask` can also be configured:

```vue
<template #column.name = "{ line, atRecent, atUpdate, newLink, enterGroup }">
    <la
        v-if='!enterGroup'
        model="tracker secondary-300"
        :model="{
            'bold: atRecent || isUpdated,
            italic: atRecent,
        }"
    >
        {{ opt.advanced.Option(line.name) }}
    </a>
</template>
```

(mock screenshot of the code above)

## Column Template attributes

| Field | Description |
| -------- | ------- |
| ``line`` | Contains the data of all cells. Examples: `line.name`, `line.author`.
| ``atRecent``, `atUpdate` | Values are displayed as `TRUE` for rows that were added recently (`atRecent`) or updated (`atUpdate`).
| ``newLink`` | Opens the link as a new tab for an existing object. It can be either a form or a tablespace.
| ``enterLink`` | Set to `true` when the column template is rendered on an existing selector. This can be used to avoid rendering links on the selector area.

## FrameTask Datastores

The `FrameTask` component can use datastores, allowing you to include combined objects in the table and ensure control over your data domain.

(mock screenshot of `FrameTask` code on the left, and a preview of the code on the right. Should look like a basic form).

After you define the `source` property, the `FrameTask` component retrieves the data from the specified datastore.

:::warning
Ensure that the specified datastore has all possible values for the selected options. Otherwise, the ``FrameTask`` component could fail to retrieve rows for existing IDs.
:::

### FrameTask properties when using Datastores

Before you set up your properties, ensure that the datastore column names match the object attributes that are displayed in your `FrameTask` component columns. 

This ensure that when existing objects are being edited, the form attributes are merged into the selected item row. The item row is based on property names that are immediately updated in the column before the actual database is updated.

The following properties are available for datastores:

- `propID`: datastore property containing the object ID. Default: `value`.
- `propName`: datastore property containing the object name. Default: `name`
- `propClass`: datastore property containing the object class. Default: `class`.



