# Campaigns

- [Campaigns](#campaigns)
  - [Creating a campaign](#creating-a-campaign)
  - [Assigning and sending out attestations to applicable persons](#assigning-and-sending-out-attestations-to-applicable-persons)


Periodically assess employees via automated attestation campaigns.

{Screenshot of a Campaign capability in a SaaS product that has a Conflicts of Interest solution}


:::tip
The campaign capability can be configured via the **Admin Portal**. For more information, see [Personalization].
:::

Attestations can be sent out to individual employees, or groups of employees. For instance, you can assess all emplyoees in the organization, all managers/supervisors, or assess employees per region.


**Advanced capabilities**

The campaign also includes additional capabilities, customizable by users with the **Account Admin** role in the **Advanced** section:

- display the disclosure history of a person via the **Show history** toggle;


{Screenshot of a History capability in a SaaS product that has a Conflicts of Interest solution}


- use a questionnaire in a disclosure campaign via the **Use Questionnaire** toggle. Once enabled, the attestation sent to the person will have a set of questions that need to be answered in order to complete the attestation.

{Screenshot of a Questionnaire capability in a SaaS product that has a Conflicts of Interest solution}


**Default workflow**

The disclosure campaign workflow consists of steps displayed in the illustration below:

{Screenshot of a Disclosure workflow in a SaaS product that has a Conflicts of Interest solution}


1. The **Central Team** of the organization sets up the campaign and starts it. Once the campaign is saved, you can perform the following actions in the campaign:
   - edit campaign details;
   - assign applicable persons to perform attestations;
   - send email reminders urging assigned employees to complete attestations.
2. Assigned employees complete the attestation.
3. Based on how the campaign is set up, the attestation submitted by employees can be processed in several ways:
   - completed attestations are sent directly to the register;
   - if a **Questionnaire** is enabled in the campaign, and there are questions answered with **No**, the **Compliance Officer** can create a follow-up disclosure for that answer.
4. **Compliance Officers** can close the campaign at any time regardless if there are any ongoing attestations.

## Creating a campaign

1. Go to **Conflicts of Interest** > **Campaigns**.
2. Click **+ Campaign**.

{Screenshot of a + Campaign button in a SaaS product that has a Conflicts of Interest solution}


3. Complete the required fields: **Name**, **Start Date**, and **End Date**.
4. In **Campaign Settings**, you can:
   - personalize the **Header** and **Footer** of the campaign;
   - include a **Policy** in the campaign. Employees will be prompted to complete the policy during the attestation;
   - display employee disclosure history via the **Show Disclosure History** button.


:::tip
As a user with the **Account Compliance Officer** or **Account Admin** role, you can create or add custom policies via **Settings** > **Library** > **Policies** and use them for your disclosure campaign. For more information, see **Policies**.
:::

5. In the **Learning** section, you can:

   - enable **Precursor** training and include a mandatory course at the start of the attestation;
   - enable **Learning** and select other courses that will be included in the attestation;
   - select the **Length** of the attestation. Once the selected time period is over, the employee cannot submit the attestation anymore.
6. Once you're done, click **Start Campaign**.


:::tip
Alternatively, you can enable **Prepare** to save your changes and submit the campaign at a later time.
:::

{Screenshot of a Prepare button in a SaaS product that has a Conflicts of Interest solution}


The campaign has been created. At this point, you can assign applicable persons to the campaign. Once assigned, the persons will receive an attestation. Users with the **Account Compliance Officer** can access the advanced campaign form via notifications received in the **Mail**. 

## Assigning and sending out attestations to applicable persons

1. Go to **Conflicts of Interest** > **Campaigns**.
2. Click the name of your campaign.

{Screenshot of a user clicking a Campaign in a SaaS product that has a Conflicts of Interest solution}


3. Click the **Applicable Persons** tab and click **Apply Roles & Persons**.

{Screenshot of a button called "Apply Roles & Persons" in a SaaS product that has a Conflicts of Interest solution}


4. In the **Select** field, select the business roles, user, or groups that will receive the attestation.

:::tip
- all users assigned to the campaign are notified in the **Mail**;
- enable the **Automatic user enrollment** toggle which automatically sends out an attestation to new users part of the assigned group.
:::

5. Click **Save**.

The selected users and business roles have been assigned to the attestation. Notice that the **Campaign Status** chart on the right is also updated.

6. In the **Assignment** section:

    - click **Send Attestation** next to each individual employee;
    - click **Assignment** to send out attestation to all employees to assigned groups.

The assignment has been completed. Notifications have been sent out to employees.

