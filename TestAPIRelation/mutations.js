/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProgram = /* GraphQL */ `
  mutation CreateProgram(
    $input: CreateProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    createProgram(input: $input, condition: $condition) {
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
export const updateProgram = /* GraphQL */ `
  mutation UpdateProgram(
    $input: UpdateProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    updateProgram(input: $input, condition: $condition) {
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
export const deleteProgram = /* GraphQL */ `
  mutation DeleteProgram(
    $input: DeleteProgramInput!
    $condition: ModelProgramConditionInput
  ) {
    deleteProgram(input: $input, condition: $condition) {
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
export const createMentor = /* GraphQL */ `
  mutation CreateMentor(
    $input: CreateMentorInput!
    $condition: ModelMentorConditionInput
  ) {
    createMentor(input: $input, condition: $condition) {
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
export const updateMentor = /* GraphQL */ `
  mutation UpdateMentor(
    $input: UpdateMentorInput!
    $condition: ModelMentorConditionInput
  ) {
    updateMentor(input: $input, condition: $condition) {
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
export const deleteMentor = /* GraphQL */ `
  mutation DeleteMentor(
    $input: DeleteMentorInput!
    $condition: ModelMentorConditionInput
  ) {
    deleteMentor(input: $input, condition: $condition) {
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
export const createMentorProgram = /* GraphQL */ `
  mutation CreateMentorProgram(
    $input: CreateMentorProgramInput!
    $condition: ModelMentorProgramConditionInput
  ) {
    createMentorProgram(input: $input, condition: $condition) {
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
export const updateMentorProgram = /* GraphQL */ `
  mutation UpdateMentorProgram(
    $input: UpdateMentorProgramInput!
    $condition: ModelMentorProgramConditionInput
  ) {
    updateMentorProgram(input: $input, condition: $condition) {
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
export const deleteMentorProgram = /* GraphQL */ `
  mutation DeleteMentorProgram(
    $input: DeleteMentorProgramInput!
    $condition: ModelMentorProgramConditionInput
  ) {
    deleteMentorProgram(input: $input, condition: $condition) {
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
export const createMenteeProgram = /* GraphQL */ `
  mutation CreateMenteeProgram(
    $input: CreateMenteeProgramInput!
    $condition: ModelMenteeProgramConditionInput
  ) {
    createMenteeProgram(input: $input, condition: $condition) {
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
export const updateMenteeProgram = /* GraphQL */ `
  mutation UpdateMenteeProgram(
    $input: UpdateMenteeProgramInput!
    $condition: ModelMenteeProgramConditionInput
  ) {
    updateMenteeProgram(input: $input, condition: $condition) {
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
export const deleteMenteeProgram = /* GraphQL */ `
  mutation DeleteMenteeProgram(
    $input: DeleteMenteeProgramInput!
    $condition: ModelMenteeProgramConditionInput
  ) {
    deleteMenteeProgram(input: $input, condition: $condition) {
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
export const createMentee = /* GraphQL */ `
  mutation CreateMentee(
    $input: CreateMenteeInput!
    $condition: ModelMenteeConditionInput
  ) {
    createMentee(input: $input, condition: $condition) {
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
export const updateMentee = /* GraphQL */ `
  mutation UpdateMentee(
    $input: UpdateMenteeInput!
    $condition: ModelMenteeConditionInput
  ) {
    updateMentee(input: $input, condition: $condition) {
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
export const deleteMentee = /* GraphQL */ `
  mutation DeleteMentee(
    $input: DeleteMenteeInput!
    $condition: ModelMenteeConditionInput
  ) {
    deleteMentee(input: $input, condition: $condition) {
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
export const createMenteeApplication = /* GraphQL */ `
  mutation CreateMenteeApplication(
    $input: CreateMenteeApplicationInput!
    $condition: ModelMenteeApplicationConditionInput
  ) {
    createMenteeApplication(input: $input, condition: $condition) {
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
export const updateMenteeApplication = /* GraphQL */ `
  mutation UpdateMenteeApplication(
    $input: UpdateMenteeApplicationInput!
    $condition: ModelMenteeApplicationConditionInput
  ) {
    updateMenteeApplication(input: $input, condition: $condition) {
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
export const deleteMenteeApplication = /* GraphQL */ `
  mutation DeleteMenteeApplication(
    $input: DeleteMenteeApplicationInput!
    $condition: ModelMenteeApplicationConditionInput
  ) {
    deleteMenteeApplication(input: $input, condition: $condition) {
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
export const createMilestone = /* GraphQL */ `
  mutation CreateMilestone(
    $input: CreateMilestoneInput!
    $condition: ModelMilestoneConditionInput
  ) {
    createMilestone(input: $input, condition: $condition) {
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
export const updateMilestone = /* GraphQL */ `
  mutation UpdateMilestone(
    $input: UpdateMilestoneInput!
    $condition: ModelMilestoneConditionInput
  ) {
    updateMilestone(input: $input, condition: $condition) {
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
export const deleteMilestone = /* GraphQL */ `
  mutation DeleteMilestone(
    $input: DeleteMilestoneInput!
    $condition: ModelMilestoneConditionInput
  ) {
    deleteMilestone(input: $input, condition: $condition) {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
export const createPreRequisiteTask = /* GraphQL */ `
  mutation CreatePreRequisiteTask(
    $input: CreatePreRequisiteTaskInput!
    $condition: ModelPreRequisiteTaskConditionInput
  ) {
    createPreRequisiteTask(input: $input, condition: $condition) {
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
export const updatePreRequisiteTask = /* GraphQL */ `
  mutation UpdatePreRequisiteTask(
    $input: UpdatePreRequisiteTaskInput!
    $condition: ModelPreRequisiteTaskConditionInput
  ) {
    updatePreRequisiteTask(input: $input, condition: $condition) {
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
export const deletePreRequisiteTask = /* GraphQL */ `
  mutation DeletePreRequisiteTask(
    $input: DeletePreRequisiteTaskInput!
    $condition: ModelPreRequisiteTaskConditionInput
  ) {
    deletePreRequisiteTask(input: $input, condition: $condition) {
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
