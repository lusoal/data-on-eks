"use strict";(self.webpackChunkdoeks_website=self.webpackChunkdoeks_website||[]).push([[1477],{10:a=>{a.exports=JSON.parse('{"blogPosts":[{"id":"welcome","metadata":{"permalink":"/blog/welcome","editUrl":"https://github.com/awslabs/data-on-eks/blob/main/website/blog/blog/2022-09-19-welcome/index.md","source":"@site/blog/2022-09-19-welcome/index.md","title":"Welcome","description":"Data on EKS Blogs & Benchmarks","date":"2022-09-19T00:00:00.000Z","formattedDate":"September 19, 2022","tags":[{"label":"aws","permalink":"/blog/tags/aws"}],"readingTime":0.375,"hasTruncateMarker":false,"authors":[{"name":"Vara Bonthu","title":"Maintainer of Data on EKS @ AWS","url":"https://github.com/vara-bonthu","imageURL":"https://github.com/vara-bonthu.png","key":"vara-bonthu"}],"frontMatter":{"slug":"welcome","title":"Welcome","authors":["vara-bonthu"],"tags":["aws"]},"nextItem":{"title":"EMR on EKS Best Practices","permalink":"/blog/EMR on EKS Best Practices"}},"content":"## Data on EKS Blogs & Benchmarks\\n\\nIn this section you will find `Blogs` and `Benchmark reports` for the following topics.\\n\\nAWS Data Analytics and ML blogs are featured a short blogs.\\n\\n\ud83d\ude80 [EMR on EKS](https://docs.aws.amazon.com/emr/latest/EMR-on-EKS-DevelopmentGuide/emr-eks.html)\\n\\n\ud83d\ude80 [Spark on EKS](https://spark.apache.org/docs/latest/running-on-kubernetes.html)\\n\\n\ud83d\ude80 Custom Kubernetes Schedulers (e.g., [Apache YuniKorn](https://yunikorn.apache.org/), [Volcano](https://volcano.sh/en/))\\n\\n\ud83d\ude80 Job Schedulers (e.g., [Apache Airflow](https://airflow.apache.org/), [Argo Workflows](https://argoproj.github.io/argo-workflows/))\\n\\n\ud83d\ude80 Distributed Databases (e.g., [Cassandra](https://cassandra.apache.org/_/blog/Cassandra-on-Kubernetes-A-Beginners-Guide.html), [CockroachDB](https://github.com/cockroachdb/cockroach-operator), [MongoDB](https://github.com/mongodb/mongodb-kubernetes-operator) etc.)\\n\\n\ud83d\ude80 Streaming Platforms (e.g., [Apache Kafka](https://github.com/apache/kafka), [Apache Flink](https://github.com/apache/flink), Apache Beam etc.)"},{"id":"EMR on EKS Best Practices","metadata":{"permalink":"/blog/EMR on EKS Best Practices","editUrl":"https://github.com/awslabs/data-on-eks/blob/main/website/blog/blog/2022-09-10-emr-eks-best-practices.mdx","source":"@site/blog/2022-09-10-emr-eks-best-practices.mdx","title":"EMR on EKS Best Practices","description":"EMR Containers Best Practices Guides","date":"2022-09-10T00:00:00.000Z","formattedDate":"September 10, 2022","tags":[{"label":"emr-on-eks","permalink":"/blog/tags/emr-on-eks"},{"label":"Spark","permalink":"/blog/tags/spark"},{"label":"Observability","permalink":"/blog/tags/observability"},{"label":"Amazon Managed Prometheus","permalink":"/blog/tags/amazon-managed-prometheus"},{"label":"Amazon Managed Grafana","permalink":"/blog/tags/amazon-managed-grafana"}],"readingTime":0.635,"hasTruncateMarker":false,"authors":[{"name":"aws","title":"Amazon Web Services","url":"https://github.com/aws/aws-emr-containers-best-practices","imageURL":"https://github.com/aws.png","key":"aws"}],"frontMatter":{"slug":"EMR on EKS Best Practices","title":"EMR on EKS Best Practices","authors":["aws"],"tags":["emr-on-eks","Spark","Observability","Amazon Managed Prometheus","Amazon Managed Grafana"]},"prevItem":{"title":"Welcome","permalink":"/blog/welcome"},"nextItem":{"title":"Observability EMR on EKS","permalink":"/blog/Observability EMR on EKS"}},"content":"## [EMR Containers Best Practices Guides](https://aws.github.io/aws-emr-containers-best-practices/)\\n\\nAmazon EMR on Amazon EKS enables you to submit Apache Spark jobs on demand on Amazon Elastic Kubernetes Service (EKS) without provisioning clusters. With EMR on EKS, you can consolidate analytical workloads with your other Kubernetes-based applications on the same Amazon EKS cluster to improve resource utilization and simplify infrastructure management.\\n\\nThis link provides the best practices and templates to get started with Amazon EMR on EKS. We publish this guide on GitHub so we could iterate the content quickly, provide timely and effective recommendations for variety of concerns, and easily incorporate suggestions from the broader community.\\n\\nCheckout the EMR on EKS Best practices GitHub docs [here](https://aws.github.io/aws-emr-containers-best-practices/)\\n\\n### Architecture\\nThe following diagram illustrates the solution architecture Amazon EMR on EKS.\\n\\n![emr-eks-architecture](./emr-eks-architecture.png)"},{"id":"Observability EMR on EKS","metadata":{"permalink":"/blog/Observability EMR on EKS","editUrl":"https://github.com/awslabs/data-on-eks/blob/main/website/blog/blog/2022-05-03-emr-eks-amp-amg-blog.mdx","source":"@site/blog/2022-05-03-emr-eks-amp-amg-blog.mdx","title":"Observability EMR on EKS","description":"Monitoring Amazon EMR on EKS with Amazon Managed Prometheus and Amazon Managed Grafana","date":"2022-05-03T00:00:00.000Z","formattedDate":"May 3, 2022","tags":[{"label":"emr-on-eks","permalink":"/blog/tags/emr-on-eks"},{"label":"Spark","permalink":"/blog/tags/spark"},{"label":"Observability","permalink":"/blog/tags/observability"},{"label":"Amazon Managed Prometheus","permalink":"/blog/tags/amazon-managed-prometheus"},{"label":"Amazon Managed Grafana","permalink":"/blog/tags/amazon-managed-grafana"}],"readingTime":0.58,"hasTruncateMarker":false,"authors":[{"name":"Vara Bonthu","title":"Maintainer of Data on EKS @ AWS","url":"https://github.com/vara-bonthu","imageURL":"https://github.com/vara-bonthu.png","key":"vara-bonthu"}],"frontMatter":{"slug":"Observability EMR on EKS","title":"Observability EMR on EKS","authors":["vara-bonthu"],"tags":["emr-on-eks","Spark","Observability","Amazon Managed Prometheus","Amazon Managed Grafana"]},"prevItem":{"title":"EMR on EKS Best Practices","permalink":"/blog/EMR on EKS Best Practices"}},"content":"## [Monitoring Amazon EMR on EKS with Amazon Managed Prometheus and Amazon Managed Grafana](https://aws.amazon.com/blogs/mt/monitoring-amazon-emr-on-eks-with-amazon-managed-prometheus-and-amazon-managed-grafana/)\\n\\nIn this post, we will learn to build end-to-end observability for EMR on EKS Spark workloads by leveraging Amazon Managed Service for Prometheus to collect and store the metrics generated by Spark Applications. We will then use Amazon Managed Grafana to build dashboards for monitoring use cases\\n\\nCheckout the full blog [here](https://aws.amazon.com/blogs/mt/monitoring-amazon-emr-on-eks-with-amazon-managed-prometheus-and-amazon-managed-grafana/)\\n\\n### Architecture\\nThe following diagram illustrates the solution architecture for scraping Spark Driver and Executors\u2019 metrics, as well as writing to Amazon Managed Service for Prometheus.\\n\\n![emr-eks-amp-amg](./emr-eks-amp-amg.png)\\n\\n### Grafana Dashboard for Spark\\nThe following Grafana dashboard displays the EMR on EKS Spark job metrics with Driver and Executor details.\\n\\n![emr-eks-amp-amg-output](./emr-eks-amp-amg-output.png)"}]}')}}]);