/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProgram = /* GraphQL */ `
  subscription OnCreateProgram {
    onCreateProgram {
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
export const onUpdateProgram = /* GraphQL */ `
  subscription OnUpdateProgram {
    onUpdateProgram {
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
export const onDeleteProgram = /* GraphQL */ `
  subscription OnDeleteProgram {
    onDeleteProgram {
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
export const onCreateMentor = /* GraphQL */ `
  subscription OnCreateMentor {
    onCreateMentor {
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
export const onUpdateMentor = /* GraphQL */ `
  subscription OnUpdateMentor {
    onUpdateMentor {
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
export const onDeleteMentor = /* GraphQL */ `
  subscription OnDeleteMentor {
    onDeleteMentor {
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
export const onCreateMentorProgram = /* GraphQL */ `
  subscription OnCreateMentorProgram {
    onCreateMentorProgram {
      id
      programID
      mentorID
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
      mentor {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMentorProgram = /* GraphQL */ `
  subscription OnUpdateMentorProgram {
    onUpdateMentorProgram {
      id
      programID
      mentorID
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
      mentor {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMentorProgram = /* GraphQL */ `
  subscription OnDeleteMentorProgram {
    onDeleteMentorProgram {
      id
      programID
      mentorID
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
      mentor {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMenteeProgram = /* GraphQL */ `
  subscription OnCreateMenteeProgram {
    onCreateMenteeProgram {
      id
      programID
      menteeID
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
      mentee {
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
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateMenteeProgram = /* GraphQL */ `
  subscription OnUpdateMenteeProgram {
    onUpdateMenteeProgram {
      id
      programID
      menteeID
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
      mentee {
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
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteMenteeProgram = /* GraphQL */ `
  subscription OnDeleteMenteeProgram {
    onDeleteMenteeProgram {
      id
      programID
      menteeID
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
      mentee {
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
      createdAt
      updatedAt
    }
  }
`;
export const onCreateMentee = /* GraphQL */ `
  subscription OnCreateMentee {
    onCreateMentee {
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
export const onUpdateMentee = /* GraphQL */ `
  subscription OnUpdateMentee {
    onUpdateMentee {
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
export const onDeleteMentee = /* GraphQL */ `
  subscription OnDeleteMentee {
    onDeleteMentee {
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
export const onCreateMenteeApplication = /* GraphQL */ `
  subscription OnCreateMenteeApplication {
    onCreateMenteeApplication {
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
export const onUpdateMenteeApplication = /* GraphQL */ `
  subscription OnUpdateMenteeApplication {
    onUpdateMenteeApplication {
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
export const onDeleteMenteeApplication = /* GraphQL */ `
  subscription OnDeleteMenteeApplication {
    onDeleteMenteeApplication {
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
export const onCreateMilestone = /* GraphQL */ `
  subscription OnCreateMilestone {
    onCreateMilestone {
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
export const onUpdateMilestone = /* GraphQL */ `
  subscription OnUpdateMilestone {
    onUpdateMilestone {
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
export const onDeleteMilestone = /* GraphQL */ `
  subscription OnDeleteMilestone {
    onDeleteMilestone {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
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
export const onCreatePreRequisiteTask = /* GraphQL */ `
  subscription OnCreatePreRequisiteTask {
    onCreatePreRequisiteTask {
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
export const onUpdatePreRequisiteTask = /* GraphQL */ `
  subscription OnUpdatePreRequisiteTask {
    onUpdatePreRequisiteTask {
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
export const onDeletePreRequisiteTask = /* GraphQL */ `
  subscription OnDeletePreRequisiteTask {
    onDeletePreRequisiteTask {
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
