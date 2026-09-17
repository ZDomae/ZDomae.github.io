# Overview

- [Overview](#overview)
  - [Program](#program)
  - [Portal](#portal)
    - [Setting up new risk types](#setting-up-new-risk-types)
  - [Organizing groups](#organizing-groups)
    - [Creating users with managerial positions](#creating-users-with-managerial-positions)


## Program 

We have designed a specialized **Product** program that will help you utilize every capability of our software. 

{Screenshot of a SaaS product overview }


| Capability | Description |
| -------- | ------- |
| Register | Monitor and manage all issues in a central repository.|
| Issues | Raise an issue by choosing from several templates, document the essential information associated with the issues, and manage all issues in your organization.|
| Risks | Identify and register all risks.
| Controls | Set up a control strategy for identified risks.
| Assessments | Assess all risks and implement a control strategy. |
| Dashboards | Track visual data and view key performance indicators (KPIs) and key data points to monitors the status of reported issues
| Reports | Structure a report via advanced data visualizations powered by Microsoft Power BI: display an overview of all issues, turn them into a visual representation, present an overview of issues to stakeholders

## Portal

Users with the **Acount Admin** can perform tasks via the **Admin Portal** by tailoring the forms, fields, types, and other items in the application depending on the needs of the organization.


### Setting up new risk types

You can create new risk types, or edit existing ones via our **Risk Type** admin section.

Roles involved:

**Account Admin**

1. Go to **Admin Portal** > **Types**.
2. Click **Search** and enter **Risk Type**.
3. Click **+ Risk Type**.

{Screenshot of + Risk Type}

4. Complete the required fields: **Name**, **Identifier**, **Class**, **Due Date**, and **Description**.
5. Click **Update**.

You have created a risk type.

## Organizing groups

Roles involved:

**Account Admin**

Control assessments can be sent out to specific groups of persons: a group of regular employees, managers, persons in a specific region, and others. These groups can then be selected in the **Group** field of a control assessment.

{Screenshot of a group form in a SaaS product}

If a person leaves your organization, or their position in the organization has changed, once they are removed from a group, or their users are no longer part of the assigned group, they will be revoked from the control assessment. For reference, see **Assigning and sending out control assessments to groups**.


### Creating users with managerial positions

1. Go to **Groups** > **Employees**.
2. Click **Create Employee Group**.

{Screenshot of a button that says "Create Employee Group"}


3. Complete the required fields:

| Field | Description |
| -------- | ------- |
| Name | Enter the name of your group. |
| Email | Enter the contact email of the person responsible for the group. |
| Number | Enter the contact number of the person responsible for the group. |
| Group title | Select the group title. New group titles can be created in the **Admin Portal**. See *Creating new group titles**.
| Reports to | Select the person/group that this specific group reports to.
| Emergency Contacts | Enter the emergency contact number in case of unavailability.
| Language | Select the primary language of the group.
| Description | Enter the description of the group.

4. In the **Employees** field, select all the employees that you want part of the group.
5. Click **Update**.

The group has been created and all of the selected persons have been added to the group.

{Screenshot of a SaaS product form with a group that is filled with employees}


You can assign these groups in **Control Assessments**. Once assigned, all employees part of the group can perform the control assessment.
