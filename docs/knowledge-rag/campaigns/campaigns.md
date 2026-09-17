# Campaigns

> Use campaigns to ask employees to confirm information on a schedule. You create a campaign, assign people, and track completion.

[[toc]]

## About campaigns

Periodically, you assess employees through automated attestation campaigns.

![Screenshot: Campaign capability](/knowledge-rag/campaigns-capability.png)

Attestations can go to individuals or groups — for example, all employees, all managers, or employees in a region.

::: tip
You can configure campaign behavior in the **Admin Portal**. For details, see *Personalization*.
:::

### Advanced capabilities

An **Account Admin** can configure these options in the **Advanced** section of a campaign:

- Show disclosure history for a person via the **Show history** toggle.

![Screenshot: History capability](/knowledge-rag/campaigns-history.png)

- Use a questionnaire via the **Use Questionnaire** toggle. When enabled, the attestation includes questions that the person must answer to complete it.

![Screenshot: Questionnaire capability](/knowledge-rag/campaigns-questionnaire.png)

### Default workflow

![Screenshot: Disclosure workflow](/knowledge-rag/campaigns-workflow.png)

1. The **Central Team** sets up the campaign and starts it. After saving, you can edit details, assign people, and send reminders.
2. Assigned employees complete the attestation.
3. Completed attestations are processed:
   - Without a questionnaire, they go directly to the register.
   - With a questionnaire, if any answer is **No**, the **Compliance Officer** can create a follow-up disclosure for that answer.
4. **Compliance Officers** can close the campaign at any time, even with open attestations.

## Creating a campaign

### Prerequisites

- Role: **Account Admin**, **Account Compliance Officer**, or other role with campaign creation rights.
- You know the campaign **Name**, **Start Date**, and **End Date**.

### Procedure

1. Go to **Conflicts of Interest** > **Campaigns**.
2. Click **+ Campaign**.

![Screenshot: + Campaign button](/knowledge-rag/campaigns-plus-campaign.png)

3. Enter the required fields: **Name**, **Start Date**, **End Date**.
4. In **Campaign Settings**, you can:
   - Personalize the **Header** and **Footer**.
   - Include a **Policy** that employees must acknowledge during the attestation.
   - Show disclosure history via **Show Disclosure History**.

::: tip
To create a custom policy, go to **Settings** > **Library** > **Policies**. For details, see *Policies*.
:::

5. In the **Learning** section, you can:
   - Enable **Precursor** training and include a mandatory course at the start.
   - Enable **Learning** and select additional courses.
   - Set the **Length** (time window) for the attestation. After it expires, the employee can no longer submit.
6. Click **Start Campaign**.

::: tip
To save without starting, click **Prepare**.

![Screenshot: Prepare button](/knowledge-rag/campaigns-prepare.png)

:::

### Verification

The campaign appears in **Conflicts of Interest** > **Campaigns** with status **In progress** or **Prepared**. You can open it to assign people.

## Assigning and sending out attestations

### Prerequisites

- You have created a campaign.
- You know which roles, groups, or people should receive it.

### Procedure

1. Go to **Conflicts of Interest** > **Campaigns**.
2. Click the campaign name.

![Screenshot: clicking a campaign](/knowledge-rag/campaigns-click-campaign.png)

3. Open the **Applicable Persons** tab and click **Apply Roles & Persons**.

![Screenshot: Apply Roles & Persons button](/knowledge-rag/campaigns-apply-roles.png)

4. In **Select**, choose the business roles, users, or groups to include.

::: tip
- Everyone assigned to the campaign is notified in **Mail**.
- Turn on **Automatic user enrollment** to automatically include new users added to an assigned group.
:::

5. Click **Save**.

The **Campaign Status** chart on the right updates to reflect the assignment.

6. In the **Assignment** section:
   - Click **Send Attestation** next to an individual employee to send to one person.
   - Click **Assignment** to send to all employees in the assigned groups.

### Verification

Selected users receive a notification in **Mail** and the **Campaign Status** chart shows the updated count. Assignments show as **Sent**.

