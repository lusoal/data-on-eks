"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[9605],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,k=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return a?r.createElement(k,l(l({ref:t},p),{},{components:a})):r.createElement(k,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7155:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:4,sidebar_label:"EMR on EKS with Fargate"},l="EMR Virtual Cluster on EKS Fargate",s={unversionedId:"amazon-emr-on-eks/emr-eks-fargate",id:"amazon-emr-on-eks/emr-eks-fargate",title:"EMR Virtual Cluster on EKS Fargate",description:"This example shows how to provision a serverless cluster (serverless data plane) using Fargate Profiles to support EMR on EKS virtual clusters.",source:"@site/docs/amazon-emr-on-eks/emr-eks-fargate.md",sourceDirName:"amazon-emr-on-eks",slug:"/amazon-emr-on-eks/emr-eks-fargate",permalink:"/data-on-eks/docs/amazon-emr-on-eks/emr-eks-fargate",draft:!1,editUrl:"https://github.com/awslabs/data-on-eks/blob/main/website/docs/amazon-emr-on-eks/emr-eks-fargate.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"EMR on EKS with Fargate"},sidebar:"docs",previous:{title:"EMR on EKS with Apache Yunikorn",permalink:"/data-on-eks/docs/amazon-emr-on-eks/emr-eks-yunikorn"},next:{title:"EMR on EKS with FSx for Lustre",permalink:"/data-on-eks/docs/amazon-emr-on-eks/emr-eks-fsx-for-lustre"}},i={},u=[{value:"Prerequisites:",id:"prerequisites",level:2},{value:"Deploy",id:"deploy",level:3},{value:"Validate",id:"validate",level:2},{value:"Destroy",id:"destroy",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"emr-virtual-cluster-on-eks-fargate"},"EMR Virtual Cluster on EKS Fargate"),(0,n.kt)("p",null,"This example shows how to provision a serverless cluster (serverless data plane) using Fargate Profiles to support EMR on EKS virtual clusters."),(0,n.kt)("p",null,"There are two Fargate profiles created:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"kube-system")," to support core Kubernetes components such as CoreDNS"),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"emr-wildcard")," which supports any namespaces that begin with ",(0,n.kt)("inlineCode",{parentName:"li"},"emr-*"),"; this allows for creating multiple virtual clusters without having to create additional Fargate profiles for each new cluster.")),(0,n.kt)("p",null,"Using the ",(0,n.kt)("inlineCode",{parentName:"p"},"emr-on-eks")," module, you can provision as many EMR virtual clusters as you would like by passing in multiple virtual cluster definitions to ",(0,n.kt)("inlineCode",{parentName:"p"},"emr_on_eks_config"),". Each virtual cluster will get its own set of resources with permissions scoped to only that set of resources. The resources created by the ",(0,n.kt)("inlineCode",{parentName:"p"},"emr-on-eks")," addon include:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Kubernetes namespace, role, and role binding; existing or externally created namespace and role can be utilized as well"),(0,n.kt)("li",{parentName:"ul"},"IAM role for service account (IRSA) used by for job execution. Users can scope access to the appropriate S3 bucket and path via ",(0,n.kt)("inlineCode",{parentName:"li"},"s3_bucket_arns"),", use for both accessing job data as well as writing out results. The bare minimum permissions have been provided for the job execution role; users can provide additional permissions by passing in additional policies to attach to the role via ",(0,n.kt)("inlineCode",{parentName:"li"},"iam_role_additional_policies")),(0,n.kt)("li",{parentName:"ul"},"CloudWatch log group for task execution logs. Log streams are created by the job itself and not via Terraform"),(0,n.kt)("li",{parentName:"ul"},"EMR managed security group for the virtual cluster"),(0,n.kt)("li",{parentName:"ul"},"EMR virtual cluster scoped to the namespace created/provided")),(0,n.kt)("p",null,"To learn more about running completely serverless EKS clusters using Fargate, see the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/aws-ia/terraform-aws-eks-blueprints/tree/main/examples/fargate-serverless#serverless-eks-cluster-using-fargate-profiles"},(0,n.kt)("inlineCode",{parentName:"a"},"fargate-serverless"))," example."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Please be informed that the method of creating EMR on EKS clusters has changed and is now done as a Kubernetes add-on.\nThis differs from previous blueprints which deployed EMR on EKS as part of the EKS Cluster module.\nOur team is working towards simplifying both deployment approaches and will soon create a standalone Terraform module for this purpose.\nAdditionally, all blueprints will be updated with this new dedicated EMR on EKS Terraform module.")),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites:"),(0,n.kt)("p",null,"Ensure that you have the following tools installed locally:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html"},"aws cli")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://Kubernetes.io/docs/tasks/tools/"},"kubectl")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://learn.hashicorp.com/tutorials/terraform/install-cli"},"terraform"))),(0,n.kt)("h3",{id:"deploy"},"Deploy"),(0,n.kt)("p",null,"Clone the repository"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/awslabs/data-on-eks.git\n")),(0,n.kt)("p",null,"Navigate into one of the example directories and run ",(0,n.kt)("inlineCode",{parentName:"p"},"terraform init")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd data-on-eks/analytics/emr-eks-fargate\nterraform init\n")),(0,n.kt)("p",null,"Set ",(0,n.kt)("inlineCode",{parentName:"p"},"AWS_REGION")," and Run",(0,n.kt)("inlineCode",{parentName:"p"},"terraform plan")," to verify the resources created by this execution."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'export AWS_REGION="us-west-2" # Change according to your need\nterraform plan\n')),(0,n.kt)("p",null,"Deploy the pattern"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"terraform apply\n")),(0,n.kt)("p",null,"Enter ",(0,n.kt)("inlineCode",{parentName:"p"},"yes")," at command prompt to apply"),(0,n.kt)("h2",{id:"validate"},"Validate"),(0,n.kt)("p",null,"The following command will update the ",(0,n.kt)("inlineCode",{parentName:"p"},"kubeconfig")," on your local machine and allow you to interact with your EKS Cluster using ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Run ",(0,n.kt)("inlineCode",{parentName:"li"},"update-kubeconfig")," command:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"aws eks --region <REGION> update-kubeconfig --name <CLUSTER_NAME>\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Test by listing all the pods running currently. Note: the EMR on EKS virtual cluster(s) will create pods as needed to execute jobs and the pods shown will vary depending on how long after deploying the example you run the ",(0,n.kt)("inlineCode",{parentName:"li"},"kubectl get pods -A")," command:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl get pods -A\n\n# Output should look like below\nNAMESPACE      NAME                                                       READY   STATUS              RESTARTS   AGE\nkube-system    cluster-proportional-autoscaler-coredns-6ccfb4d9b5-sjb8m   1/1     Running             0          8m27s\nkube-system    coredns-7c8d74d658-9cmn2                                   1/1     Running             0          8m27s\nkube-system    coredns-7c8d74d658-pmf5l                                   1/1     Running             0          7m38s\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Execute the sample EMR on EKS job. This will calculate the value of Pi using sample PySpark job.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"cd analytics/terraform/emr-eks-fargate/examples\n./basic-pyspark-job '<ENTER_EMR_EMR_VIRTUAL_CLUSTER_ID>' '<EMR_JOB_EXECUTION_ROLE_ARN>'\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Once the job is complete, navigate to the CloudWatch log console and find the log group created by this example ",(0,n.kt)("inlineCode",{parentName:"li"},"/emr-on-eks-logs/emr-workload/emr-workload"),". Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Search Log Group")," and enter ",(0,n.kt)("inlineCode",{parentName:"li"},"roughly")," into the search field. You should see a log entry that has the returned results from the job.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "message": "Pi is roughly 3.146360",\n    "time": "2022-11-20T16:46:59+00:00"\n}\n')),(0,n.kt)("h2",{id:"destroy"},"Destroy"),(0,n.kt)("p",null,"To teardown and remove the resources created in this example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},'kubectl delete all --all -n emr-workload -n emr-custom # ensure all jobs resources are cleaned up first\nterraform destroy -target="module.eks_blueprints_kubernetes_addons" -auto-approve\nterraform destroy -target="module.eks" -auto-approve\nterraform destroy -auto-approve\n')),(0,n.kt)("p",null,"If the EMR virtual cluster fails to delete and the following error is shown:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Error: waiting for EMR Containers Virtual Cluster (xwbc22787q6g1wscfawttzzgb) delete: unexpected state 'ARRESTED', wanted target ''. last error: %!s(<nil>)\n")),(0,n.kt)("p",null,"You can clean up any of the clusters in the ",(0,n.kt)("inlineCode",{parentName:"p"},"ARRESTED")," state with the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sh"},"aws emr-containers list-virtual-clusters --region us-west-2 --states ARRESTED \\\n--query 'virtualClusters[0].id' --output text | xargs -I{} aws emr-containers delete-virtual-cluster \\\n--region us-west-2 --id {}\n")))}c.isMDXComponent=!0}}]);