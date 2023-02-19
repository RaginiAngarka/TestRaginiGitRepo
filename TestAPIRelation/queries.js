/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProgram = /* GraphQL */ `
  query GetProgram($id: ID!) {
    getProgram(id: $id) {
      id
      projectID
      organizationID
      departmentName
      programName
      description
      websiteURL
      programDetail {
        programLogoURL
        learningObjectives {
          title
          text
        }
        relevantLinks {
          title
          url
        }
        requiredSkillsAndTechnologies
        availableMenteeSpots
        publish {
          publishTo
          url
        }
      }
      preRequisiteTasks {
        items {
          id
          programID
          applicationID
          prerequisiteName
          dueDate
          submission
          submitFile
          githubURL
          description
          category
          custom
          status
          menteeComments
          mentorFeedBack
          createdAt
          updatedAt
        }
        nextToken
      }
      terms {
        termName
        termStartDate
        termEndDate
        applicationAcceptanceStartDate
        applicationAcceptanceEndDate
        tasks {
          id
          milestoneID
          taskName
          description
          status
          taskType
          menteeComments
          mentorFeedBack
          createdAt
          updatedAt
        }
      }
      coAdmins {
        firstName
        lastName
        imageUrl
        email
        role
        invitationStatus
        companyName
        githubHandle
        emailMessage
        userId
      }
      mentors {
        items {
          id
          programID
          mentorID
          createdAt
          updatedAt
        }
        nextToken
      }
      mentees {
        items {
          id
          programID
          menteeID
          createdAt
          updatedAt
        }
        nextToken
      }
      status
      createdAt
      createdBy
      updatedAt
      updatedBy
    }
  }
`;
export const listPrograms = /* GraphQL */ `
  query ListPrograms(
    $filter: ModelProgramFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPrograms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        projectID
        organizationID
        departmentName
        programName
        description
        websiteURL
        programDetail {
          programLogoURL
          requiredSkillsAndTechnologies
          availableMenteeSpots
        }
        preRequisiteTasks {
          nextToken
        }
        terms {
          termName
          termStartDate
          termEndDate
          applicationAcceptanceStartDate
          applicationAcceptanceEndDate
        }
        coAdmins {
          firstName
          lastName
          imageUrl
          email
          role
          invitationStatus
          companyName
          githubHandle
          emailMessage
          userId
        }
        mentors {
          nextToken
        }
        mentees {
          nextToken
        }
        status
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      nextToken
    }
  }
`;
export const getMentor = /* GraphQL */ `
  query GetMentor($id: ID!) {
    getMentor(id: $id) {
      id
      userID
      programs {
        items {
          id
          programID
          mentorID
          createdAt
          updatedAt
        }
        nextToken
      }
      invitationStatus
      emailMessage
      dateAccepted
      firstName
      lastName
      imageUrl
      email
      role
      companyName
      githubHandle
      createdAt
      updatedAt
    }
  }
`;
export const listMentors = /* GraphQL */ `
  query ListMentors(
    $filter: ModelMentorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMentors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        programs {
          nextToken
        }
        invitationStatus
        emailMessage
        dateAccepted
        firstName
        lastName
        imageUrl
        email
        role
        companyName
        githubHandle
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMentee = /* GraphQL */ `
  query GetMentee($id: ID!) {
    getMentee(id: $id) {
      id
      programs {
        items {
          id
          programID
          menteeID
          createdAt
          updatedAt
        }
        nextToken
      }
      manteeApplications {
        items {
          id
          userID
          programID
          applicationStatus
          applicationDate
          dateAssigned
          createdAt
          updatedAt
        }
        nextToken
      }
      evaluations {
        evaluationName
        dueDate
        status
      }
      feedBacks {
        feedBackName
        date
        status
      }
      dateAccepted
      mentorReviews {
        mentorID
        reviewStatus
        reviewComments
      }
      userID
      firstName
      lastName
      email
      createdAt
      updatedAt
    }
  }
`;
export const listMentees = /* GraphQL */ `
  query ListMentees(
    $filter: ModelMenteeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMentees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        programs {
          nextToken
        }
        manteeApplications {
          nextToken
        }
        evaluations {
          evaluationName
          dueDate
          status
        }
        feedBacks {
          feedBackName
          date
          status
        }
        dateAccepted
        mentorReviews {
          mentorID
          reviewStatus
          reviewComments
        }
        userID
        firstName
        lastName
        email
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMenteeApplication = /* GraphQL */ `
  query GetMenteeApplication($id: ID!) {
    getMenteeApplication(id: $id) {
      id
      userID
      programID
      program {
        id
        projectID
        organizationID
        departmentName
        programName
        description
        websiteURL
        programDetail {
          programLogoURL
          requiredSkillsAndTechnologies
          availableMenteeSpots
        }
        preRequisiteTasks {
          nextToken
        }
        terms {
          termName
          termStartDate
          termEndDate
          applicationAcceptanceStartDate
          applicationAcceptanceEndDate
        }
        coAdmins {
          firstName
          lastName
          imageUrl
          email
          role
          invitationStatus
          companyName
          githubHandle
          emailMessage
          userId
        }
        mentors {
          nextToken
        }
        mentees {
          nextToken
        }
        status
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      applicationStatus
      applicationDate
      preRequisites {
        items {
          id
          programID
          applicationID
          prerequisiteName
          dueDate
          submission
          submitFile
          githubURL
          description
          category
          custom
          status
          menteeComments
          mentorFeedBack
          createdAt
          updatedAt
        }
        nextToken
      }
      dateAssigned
      createdAt
      updatedAt
    }
  }
`;
export const listMenteeApplications = /* GraphQL */ `
  query ListMenteeApplications(
    $filter: ModelMenteeApplicationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMenteeApplications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        programID
        program {
          id
          projectID
          organizationID
          departmentName
          programName
          description
          websiteURL
          status
          createdAt
          createdBy
          updatedAt
          updatedBy
        }
        applicationStatus
        applicationDate
        preRequisites {
          nextToken
        }
        dateAssigned
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMilestone = /* GraphQL */ `
  query GetMilestone($id: ID!) {
    getMilestone(id: $id) {
      id
      programID
      program {
        id
        projectID
        organizationID
        departmentName
        programName
        description
        websiteURL
        programDetail {
          programLogoURL
          requiredSkillsAndTechnologies
          availableMenteeSpots
        }
        preRequisiteTasks {
          nextToken
        }
        terms {
          termName
          termStartDate
          termEndDate
          applicationAcceptanceStartDate
          applicationAcceptanceEndDate
        }
        coAdmins {
          firstName
          lastName
          imageUrl
          email
          role
          invitationStatus
          companyName
          githubHandle
          emailMessage
          userId
        }
        mentors {
          nextToken
        }
        mentees {
          nextToken
        }
        status
        createdAt
        createdBy
        updatedAt
        updatedBy
      }
      milestoneName
      dueDate
      tasks {
        items {
          id
          milestoneID
          taskName
          description
          status
          taskType
          menteeComments
          mentorFeedBack
          createdAt
          updatedAt
        }
        nextToken
      }
      status
      createdBy
      createdAt
      updatedAt
    }
  }
`;
export const listMilestones = /* GraphQL */ `
  query ListMilestones(
    $filter: ModelMilestoneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMilestones(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        programID
        program {
          id
          projectID
          organizationID
          departmentName
          programName
          description
          websiteURL
          status
          createdAt
          createdBy
          updatedAt
          updatedBy
        }
        milestoneName
        dueDate
        tasks {
          nextToken
        }
        status
        createdBy
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      milestoneID
      assignedToMentees {
        items {
          id
          dateAccepted
          userID
          firstName
          lastName
          email
          createdAt
          updatedAt
        }
        nextToken
      }
      taskName
      description
      status
      taskType
      menteeComments
      mentorFeedBack
      createdAt
      updatedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        milestoneID
        assignedToMentees {
          nextToken
        }
        taskName
        description
        status
        taskType
        menteeComments
        mentorFeedBack
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPreRequisiteTask = /* GraphQL */ `
  query GetPreRequisiteTask($id: ID!) {
    getPreRequisiteTask(id: $id) {
      id
      programID
      applicationID
      prerequisiteName
      dueDate
      submission
      submitFile
      githubURL
      description
      category
      custom
      status
      menteeComments
      mentorFeedBack
      createdAt
      updatedAt
    }
  }
`;
export const listPreRequisiteTasks = /* GraphQL */ `
  query ListPreRequisiteTasks(
    $filter: ModelPreRequisiteTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPreRequisiteTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        programID
        applicationID
        prerequisiteName
        dueDate
        submission
        submitFile
        githubURL
        description
        category
        custom
        status
        menteeComments
        mentorFeedBack
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
