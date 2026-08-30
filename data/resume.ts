export const resumeData = {
  basics: {
    name: "Sanju M",
    title:
      "Site Reliability Engineer 2 | DevSecOps | AWS | Kubernetes (EKS) | Terraform | SOC2 | ISO27001 | CI/CD",
    summary: `Senior Site Reliability / Platform Engineer with 5+ years of experience building, securing and operating cloud-native infrastructure in regulated FinTech and enterprise SaaS environments. Hands-on across AWS, Kubernetes, Terraform, GitOps, CI/CD, observability, infrastructure automation, vulnerability remediation, AI-assisted engineering and cloud cost optimization. Experienced supporting multi-account, multi-region production platforms and developer self-service. Strong focus on reliability, platform standardization, secure-by-default infrastructure, operational efficiency and measurable business impact.`,
    location: "Greater Bengaluru Area, India",
    email: "sanjucody@gmail.com",
    phone: "+91 9743428077",
    links: {
      linkedin: "https://www.linkedin.com/in/sanju-m",
    },
    open_to:
      "Open to DevSecOps, Site Reliability Engineer, Platform Engineer, and Cloud Infrastructure roles",
  },

  experience: [
    {
      company: "Smarsh",
      role: "Site Reliability Engineer 2",
      dates: "September 2023 – Present",
      location: "Bengaluru, Karnataka, India",
      bullets: [
        "Owned DevOps/SRE platform support across 5 AWS accounts and 2 regions, spanning 4 environments, ~4 EKS clusters, ~40 Kubernetes nodes, ~100 services, 150+ EC2 instances, 6 RDS instances per environment, 4 ElastiCache resources and 4 OpenSearch resources.",
        "Served as the primary DevOps/SRE platform contact for 22 engineers for approximately one year, providing reusable CI/CD workflows, centralized deployment configuration, observability, operational documentation and production support.",
        "Reduced mean incident investigation time by 60% through a Grafana, Prometheus and Datadog observability framework with service metrics, alerting and Incident.io integration; supported a 5–6 engineer on-call rotation handling ~2–3 production incidents per month.",
        "Achieved ~99.99% uptime for critical workloads by applying structured incident response, post-incident reviews, alert tuning, recurring-incident remediation and automated recovery patterns through Kubernetes and ArgoCD.",
        "Executed production EKS upgrades from Kubernetes 1.30 through 1.34 across ~4 clusters, coordinating cluster version changes, add-on upgrades, node replacement, workload eviction and service validation while maintaining application availability.",
        "Configured Kubernetes HPA using 30-day Prometheus CPU and memory utilization trends and configured PDBs based on service criticality and availability requirements; handled production troubleshooting across CrashLoopBackOff, OOMKilled, scheduling, networking and storage issues.",
        "Standardized CI/CD across 25+ repositories by designing reusable GitHub Actions workflows and centralizing Helm/Kubernetes deployment configuration; reduced application build time from ~20 minutes to 3–4 minutes and standardized stage/environment approval gates and ArgoCD rollback.",
        "Implemented GitHub Actions Runner Controller with ephemeral self-hosted runners on EC2, enabling repositories to select available runners through labels and supporting 2–3 concurrent jobs; contributed to runner autoscaling design.",
        "Helped migrate repository-local ArgoCD configuration to an App-of-Apps model and centralized Helm/Kubernetes configuration, reducing duplication and enabling developers to consume a standard deployment path with service-specific values.",
        "Used Claude daily as an AI-assisted engineering partner for designing and implementing internal engineering tools and infrastructure, including Terraform-based cloud changes, troubleshooting workflows, architecture/design evaluation and reusable plugins/hooks for team productivity.",
        "Developed automated test suites and code-quality checks with Claude assistance and integrated them into CI/CD workflows, strengthening shift-left quality and enabling earlier detection of implementation issues.",
        "Codified a large manually provisioned AWS estate into reusable Terraform modules spanning EKS, RDS, ElastiCache, OpenSearch, VPC, WAF, CloudFront, Lambda, API Gateway, Route 53, ALB and observability components, improving infrastructure consistency across 5 AWS accounts.",
        "Led the end-to-end decommissioning of a legacy AWS estate, reducing recurring infrastructure costs by approximately $80K/month through retirement of 150+ EC2 instances, 15+ RDS databases, 15+ ElastiCache resources, 10+ Elasticsearch resources, 10+ DMS resources, 100+ load balancers and 100+ storage volumes, while preserving mandatory resources and critical production data.",
        "Codified existing API Gateway infrastructure across all environments using Terraform, applying consistent infrastructure design principles and standardizing previously manual configuration.",
        "Drove CrowdStrike CSPM coverage across 4 production EKS clusters and 5 AWS accounts, standardized container base-image adoption across all services, partnered with InfoSec on vulnerability remediation and SOC2 evidence, and initially owned remediation of 10–12 critical CVEs within 14 days.",
        "Hardened production network communications by automating IPSec/StrongSwan and OpenVPN deployments with Terraform/Packer; managed IAM least-privilege reviews and AWS Secrets Manager integration through CSI drivers.",
        "Authored DevOps runbooks and onboarding documentation in Confluence, conducted knowledge-transfer sessions, reviewed Terraform/Helm/Kubernetes changes, and helped define DevOps/SRE/platform engineering standards.",
      ],
    },
    {
      company: "Open Financial Technologies",
      role: "Site Reliability Engineer",
      dates: "February 2023 – September 2023",
      location: "Bengaluru, Karnataka, India",
      bullets: [
        "Supported production AWS and GCP infrastructure for critical FinTech payment workloads across 4 GCP projects/accounts, including large GKE estates with 10–20 clusters per environment and 100+ services used by 50+ engineers.",
        "Maintained ~99.99% uptime by supporting monitoring and incident response for production GKE workloads, participating in post-incident reviews and contributing to infrastructure operations across AWS and GCP.",
        "Managed GCP infrastructure operations and Terraform-based changes, with production monitoring/NOC responsibilities across the broader GKE estate.",
      ],
    },
    {
      company: "Ellucian",
      role: "Associate Consultant",
      dates: "July 2020 – October 2022",
      location: "Bengaluru, Karnataka, India",
      bullets: [
        "Supported infrastructure automation and CI/CD standardization across 10+ enterprise university clients, 6 applications and 50+ EC2 servers replicated across multiple environments.",
        "Reduced release cycle time by 30% by standardizing Jenkins and GitLab CI pipelines with Docker and Ansible across client environments.",
        "Built Python-based infrastructure automation for patching orchestration, health monitoring and self-healing workflows, saving 5+ engineering hours weekly.",
        "Managed Linux infrastructure across Ubuntu, RHEL and Amazon Linux, including OS hardening, performance tuning and production incident response across multi-tenant environments.",
        "Configured enterprise SSO/SAML/CAS integrations with ADFS and LDAP across Tomcat, Apache and WebLogic environments.",
      ],
    },
  ],

  achievements: [
    {
    item: "Saved $80K+/month by decommissioning a legacy AWS estate",
    context:
      "Led the end-to-end retirement of 150+ EC2 instances, 15+ RDS databases, 15+ ElastiCache resources, 10+ Elasticsearch resources, 10+ DMS resources, 100+ load balancers and 100+ storage volumes.",
    metric: "$80K+/mo",
    type: "metrics" as const,
  },
  {
    item: "Reduced mean incident investigation time by 60%",
    context:
      "Built a Grafana, Prometheus and Datadog observability framework with service metrics, alerting and Incident.io integration across critical services.",
    metric: "60% faster",
    type: "metrics" as const,
  },
  {
    item: "Reduced application build time by up to 85%",
    context:
      "Standardized CI/CD across 25+ repositories using reusable GitHub Actions workflows and centralized Helm/Kubernetes deployment configuration.",
    metric: "~85%",
    type: "wins" as const,
  },
  {
    item: "Maintained ~99.99% uptime for critical workloads",
    context:
      "Applied structured incident response, alert tuning, recurring-incident remediation and automated recovery patterns through Kubernetes and ArgoCD.",
    metric: "~99.99%",
    type: "metrics" as const,
  },
  {
    item: "Standardized container security across the organisation",
    context:
      "Drove standardised container base-image adoption across all but 2 services and partnered with InfoSec on vulnerability remediation and SOC2 evidence.",
    metric: "All but 2",
    type: "security" as const,
  },
  {
    item: "Upgraded production EKS clusters from Kubernetes 1.30 to 1.34",
    context:
      "Coordinated cluster upgrades, add-ons, node replacement, workload eviction and service validation across ~4 production clusters while maintaining availability.",
    metric: "1.30 → 1.34",
    type: "wins" as const,
  },
  {
    item: "Delivered 100% migration of WebAuth from Drupal to microservices",
    context:
      "Architected the new CloudFront-backed design and built the complete CI/CD pipeline using GitHub Actions at Smarsh.",
    metric: "100%",
    type: "wins" as const,
  },
  ],

  projects: [
    {
      title: "End-to-End Fraud Detection ML Pipeline",
      context: "M.Tech Capstone Project — BITS Pilani, 2025",
      stack: ["Python", "Random Forest", "FastAPI", "Prefect", "AWS", "Docker"],
      bullets: [
        "Trained a Random Forest classification model on 50,000+ financial transaction records to detect fraudulent activity with high precision.",
        "Built a FastAPI metrics endpoint to serve real-time model predictions and expose monitoring data.",
        "Implemented automated model retraining using Prefect workflow orchestration, ensuring the model stays current with new data.",
        "Deployed the full pipeline on AWS with monitoring and alerting integrated from day one.",
      ],
    },
  ],

  skills: [
  {
    group: "SRE & Reliability",
    items: [
      "Incident Management",
      "On-Call",
      "Post-Incident Reviews",
      "Availability",
      "MTTR Reduction",
      "Alert Tuning",
      "Observability",
      "Production Troubleshooting",
      "Self-Healing",
      "Kubernetes / ArgoCD Recovery",
    ],
  },
  {
    group: "Cloud & Infrastructure",
    items: [
      "AWS — EKS, EC2, RDS, ElastiCache, OpenSearch, S3, Lambda, VPC, IAM, CloudFront, WAF, Route 53, ALB/NLB, ECR, Secrets Manager, ACM, CloudWatch, SQS, SNS, EventBridge, DMS",
      "GCP",
      "Terraform",
      "Ansible",
      "Packer",
    ],
  },
  {
    group: "Kubernetes & Platform",
    items: [
      "Kubernetes",
      "Amazon EKS",
      "Google GKE",
      "Helm",
      "HPA",
      "PDB",
      "Ingress",
      "Cluster Upgrades",
      "Node Lifecycle",
      "Capacity Planning",
      "Centralized Helm/Kubernetes Configuration",
      "GitOps",
      "Platform Standardization",
      "Developer Self-Service",
    ],
  },
  {
    group: "CI/CD & GitOps",
    items: [
      "GitHub Actions",
      "Reusable Workflows",
      "GitHub Actions Runner Controller",
      "Ephemeral Self-Hosted Runners",
      "Jenkins",
      "GitLab CI",
      "ArgoCD",
      "App-of-Apps",
      "Release Gates",
      "Rollback",
    ],
  },
  {
    group: "AI-Assisted Engineering",
    items: [
      "Claude",
      "AI-Assisted Infrastructure Development",
      "AI-Assisted Terraform Development",
      "Automated Test & Code-Quality Workflows",
      "Engineering Tooling",
      "Reusable Plugins & Hooks",
      "Technical Design Evaluation",
      "AI-Assisted Problem Solving",
    ],
  },
  {
    group: "Security & Compliance",
    items: [
      "CrowdStrike CSPM",
      "CVE Remediation",
      "Vulnerability Management",
      "Container Base Images",
      "IAM Least Privilege",
      "AWS Secrets Manager",
      "CSI Driver",
      "SOC2",
      "ISO 27001",
      "IPSec / StrongSwan",
      "OpenVPN",
      "mTLS",
    ],
  },
  {
    group: "Networking & Data",
    items: [
      "VPC",
      "Subnets",
      "Route Tables",
      "NAT",
      "ALB/NLB",
      "DNS",
      "SSL/TLS",
      "VPN",
      "Redis / ElastiCache",
      "RDS",
      "MySQL",
      "PostgreSQL",
      "OpenSearch / Elasticsearch",
    ],
  },
  {
    group: "Observability",
    items: [
      "Prometheus",
      "Grafana",
      "Datadog",
      "OpenTelemetry",
      "Incident.io",
      "Monitoring",
      "Alerting",
      "Service Metrics",
      "Production Troubleshooting",
    ],
  },
  {
    group: "Automation & Systems",
    items: [
      "Python",
      "Bash",
      "Linux — Ubuntu, RHEL, Amazon Linux",
      "Docker",
      "Git",
      "FastAPI",
    ],
  },
  {
    group: "Identity & Access",
    items: [
      "SAML",
      "SSO",
      "Okta",
      "Auth0",
      "Ping Identity",
      "AWS Cognito",
      "LDAP",
    ],
  },
],


  education: [
    {
      institution: "BITS Pilani — Work Integrated Learning Programmes",
      degree: "Master of Technology (M.Tech)",
      field: "Cloud Computing",
      dates: "August 2023 – December 2025",
      notes: "",
    },
    {
      institution: "Dayananda Sagar University",
      degree: "Bachelor of Engineering (B.E.)",
      field: "Computer Science",
      dates: "2016 – 2020",
      notes: "",
    },
  ],

  certifications: [
    { name: "AWS Certified Solutions Architect – Associate", code: "SAA-C03", issuer: "Amazon Web Services" },
    { name: "Google Cloud Platform Fundamentals: Core Infrastructure", issuer: "Google Cloud" },
    { name: "Python Scripting Certification", issuer: "Edureka" },
    { name: "DevOps Engineer Certification", issuer: "Edureka" },
    { name: "Raspberry Pi and Python Based Automation System Design", issuer: "IIT MADRAS" },
  ],
};

export const topImpact = [
  {
    label: "Cloud Cost Savings",
    value: "80",
    suffix: "K+/mo",
    description: "Recurring AWS infrastructure savings",
  },
  {
    label: "Faster Incident Investigation",
    value: "60",
    suffix: "%",
    description: "Reduction in mean investigation time",
  },
  {
    label: "Faster Application Builds",
    value: "85",
    suffix: "%",
    description: "~20 min reduced to 3–4 min across 25+ repositories",
  },
];

