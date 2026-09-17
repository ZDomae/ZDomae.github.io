# Overview

> This page introduces the product and the admin portal. Use it to decide where to configure a capability and which role you need.

[[toc]]

## Prerequisites

- Role: **Account Admin**. You need this role to configure product capabilities and portal settings.
- You have access to the product and the admin portal.

## About the product

The *Product* program helps you centralize work that is usually spread across tools.

![Screenshot: SaaS product overview](/knowledge-rag/overview.png)

| Capability | What you can do with it |
| --- | --- |
| Register | Monitor and manage all issues in a central repository. |
| Issues | Choose a template, capture the required information, and manage the issue through its lifecycle. |
| Risks | Identify and register risks. |
| Controls | Define a control strategy for each risk. |
| Assessments | Assess risks and apply your control strategy. |
| Dashboards | Track key performance indicators (KPIs) and status. |
| Reports | Build reports with Microsoft Power BI visualizations. |

## Portal

Users with the **Account Admin** role use the admin portal to tailor forms, fields, types, and other items to the needs of your organization.

### Setting up new risk types

#### Prerequisites

- Role: **Account Admin**.

#### Procedure

1. Go to **Admin Portal** > **Types**.
2. Click **Search** and enter **Risk Type**.
3. Click **+ Risk Type**.

![Screenshot: Create Employee Group button](/knowledge-rag/overview-create-employee-group.png)

4. Complete the required fields: **Name**, **Identifier**, **Class**, **Due Date**, and **Description**.
5. Click **Update**.

#### Verification

The new risk type appears in the **Types** list.

## Organizing groups

Create groups to send control assessments to the right people — for example, all employees in a region, all managers, or a compliance team. You select these groups in the **Group** field of a control assessment.

When you remove a person from a group, that person no longer receives assessments assigned to the group. See *Assigning and sending out control assessments to groups* for details.

![Screenshot: group form](/knowledge-rag/overview-group-form.png)

### Creating users with managerial positions

#### Prerequisites

- Role: **Account Admin**.
- You know the manager's name, contact email, and the group hierarchy they report to.

#### Procedure

1. Go to **Groups** > **Employees**.
2. Click **Create Employee Group**.

![Screenshot: Create Employee Group button](/knowledge-rag/overview-create-employee-group.png)

3. Complete the required fields:

| Field | Description |
| --- | --- |
| Name | Enter the group name. |
| Email | Enter the contact email for the group owner. |
| Number | Enter the contact phone number for the group owner. |
| Group title | Select the title. To create a new title, go to **Admin Portal** > **Group Titles**. |
| Reports to | Select the person or group this group reports to. |
| Emergency contacts | Enter a contact to reach if the owner is unavailable. |
| Language | Select the group's primary language. |
| Description | Enter a short description of the group's purpose. |

4. In **Employees**, select the people to include.
5. Click **Update**.

#### Verification

The group appears in the **Employees** list with the selected members. You can now select it when you create a control assessment.

![Screenshot: group form with employees](/knowledge-rag/overview-group-filled.png)

## Next steps

- Configure who can do what in [Access control](/knowledge-rag/access-control/permissions.md).
- Create periodic attestations in [Campaigns](/knowledge-rag/campaigns/campaigns.md).

