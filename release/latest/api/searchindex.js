Search.setIndex({docnames:["cli/aws_ddk","core/aws_ddk_core","core/stubs/aws_ddk_core.base.BaseStack","core/stubs/aws_ddk_core.cicd.CICDPipelineStack","core/stubs/aws_ddk_core.config.Config","core/stubs/aws_ddk_core.config.JSONConfigStrategy","core/stubs/aws_ddk_core.resources.KMSFactory","core/stubs/aws_ddk_core.resources.LambdaFactory","core/stubs/aws_ddk_core.resources.S3Factory","core/stubs/aws_ddk_core.resources.SQSFactory","core/stubs/aws_ddk_core.stages.GlueTransformStage","core/stubs/aws_ddk_core.stages.S3EventStage","core/stubs/aws_ddk_core.stages.SqsToLambdaStage","index"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,sphinx:56},filenames:["cli/aws_ddk.rst","core/aws_ddk_core.rst","core/stubs/aws_ddk_core.base.BaseStack.rst","core/stubs/aws_ddk_core.cicd.CICDPipelineStack.rst","core/stubs/aws_ddk_core.config.Config.rst","core/stubs/aws_ddk_core.config.JSONConfigStrategy.rst","core/stubs/aws_ddk_core.resources.KMSFactory.rst","core/stubs/aws_ddk_core.resources.LambdaFactory.rst","core/stubs/aws_ddk_core.resources.S3Factory.rst","core/stubs/aws_ddk_core.resources.SQSFactory.rst","core/stubs/aws_ddk_core.stages.GlueTransformStage.rst","core/stubs/aws_ddk_core.stages.S3EventStage.rst","core/stubs/aws_ddk_core.stages.SqsToLambdaStage.rst","index.rst"],objects:{"aws_ddk_core.base":[[2,0,1,"","BaseStack"]],"aws_ddk_core.base.BaseStack":[[2,1,1,"","__init__"]],"aws_ddk_core.cicd":[[3,0,1,"","CICDPipelineStack"]],"aws_ddk_core.cicd.CICDPipelineStack":[[3,1,1,"","__init__"],[3,1,1,"","add_checks"],[3,1,1,"","add_security_lint_stage"],[3,1,1,"","add_source_action"],[3,1,1,"","add_stage"],[3,1,1,"","add_synth_action"],[3,1,1,"","add_test_stage"],[3,1,1,"","build"],[3,1,1,"","synth"]],"aws_ddk_core.config":[[4,0,1,"","Config"],[5,0,1,"","JSONConfigStrategy"]],"aws_ddk_core.config.Config":[[4,1,1,"","__init__"],[4,1,1,"","get_cdk_version"],[4,1,1,"","get_env"],[4,1,1,"","get_env_config"],[4,1,1,"","get_resource_config"],[4,1,1,"","get_tags"]],"aws_ddk_core.config.JSONConfigStrategy":[[5,1,1,"","__init__"],[5,1,1,"","get_config"]],"aws_ddk_core.resources":[[6,0,1,"","KMSFactory"],[7,0,1,"","LambdaFactory"],[8,0,1,"","S3Factory"],[9,0,1,"","SQSFactory"]],"aws_ddk_core.resources.KMSFactory":[[6,1,1,"","__init__"],[6,1,1,"","key"]],"aws_ddk_core.resources.LambdaFactory":[[7,1,1,"","__init__"],[7,1,1,"","function"]],"aws_ddk_core.resources.S3Factory":[[8,1,1,"","__init__"],[8,1,1,"","bucket"]],"aws_ddk_core.resources.SQSFactory":[[9,1,1,"","__init__"],[9,1,1,"","queue"]],"aws_ddk_core.stages":[[10,0,1,"","GlueTransformStage"],[11,0,1,"","S3EventStage"],[12,0,1,"","SqsToLambdaStage"]],"aws_ddk_core.stages.GlueTransformStage":[[10,1,1,"","__init__"],[10,1,1,"","get_event_pattern"],[10,1,1,"","get_targets"],[10,2,1,"","state_machine"]],"aws_ddk_core.stages.S3EventStage":[[11,1,1,"","__init__"],[11,2,1,"","event_pattern"],[11,1,1,"","get_event_pattern"],[11,1,1,"","get_targets"],[11,2,1,"","trail"],[11,2,1,"","trail_bucket"]],"aws_ddk_core.stages.SqsToLambdaStage":[[12,1,1,"","__init__"],[12,2,1,"","dlq"],[12,2,1,"","function"],[12,1,1,"","get_event_pattern"],[12,1,1,"","get_targets"],[12,2,1,"","queue"]],"ddk-bootstrap":[[0,3,1,"cmdoption-ddk-bootstrap-e","--environment"],[0,3,1,"cmdoption-ddk-bootstrap-i","--iam-policies"],[0,3,1,"cmdoption-ddk-bootstrap-permissions-boundary","--permissions-boundary"],[0,3,1,"cmdoption-ddk-bootstrap-prefix","--prefix"],[0,3,1,"cmdoption-ddk-bootstrap-p","--profile"],[0,3,1,"cmdoption-ddk-bootstrap-qualifier","--qualifier"],[0,3,1,"cmdoption-ddk-bootstrap-r","--region"],[0,3,1,"cmdoption-ddk-bootstrap-t","--tags"],[0,3,1,"cmdoption-ddk-bootstrap-a","--trusted-accounts"],[0,3,1,"cmdoption-ddk-bootstrap-a","-a"],[0,3,1,"cmdoption-ddk-bootstrap-e","-e"],[0,3,1,"cmdoption-ddk-bootstrap-i","-i"],[0,3,1,"cmdoption-ddk-bootstrap-p","-p"],[0,3,1,"cmdoption-ddk-bootstrap-r","-r"],[0,3,1,"cmdoption-ddk-bootstrap-t","-t"]],"ddk-create-repository":[[0,3,1,"cmdoption-ddk-create-repository-d","--description"],[0,3,1,"cmdoption-ddk-create-repository-p","--profile"],[0,3,1,"cmdoption-ddk-create-repository-r","--region"],[0,3,1,"cmdoption-ddk-create-repository-t","--tags"],[0,3,1,"cmdoption-ddk-create-repository-d","-d"],[0,3,1,"cmdoption-ddk-create-repository-p","-p"],[0,3,1,"cmdoption-ddk-create-repository-r","-r"],[0,3,1,"cmdoption-ddk-create-repository-t","-t"],[0,3,1,"cmdoption-ddk-create-repository-arg-NAME","NAME"]],"ddk-deploy":[[0,3,1,"cmdoption-ddk-deploy-f","--force"],[0,3,1,"cmdoption-ddk-deploy-o","--output-dir"],[0,3,1,"cmdoption-ddk-deploy-p","--profile"],[0,3,1,"cmdoption-ddk-deploy-require-approval","--require-approval"],[0,3,1,"cmdoption-ddk-deploy-f","-f"],[0,3,1,"cmdoption-ddk-deploy-o","-o"],[0,3,1,"cmdoption-ddk-deploy-p","-p"]],"ddk-init":[[0,3,1,"cmdoption-ddk-init-e","--environment"],[0,3,1,"cmdoption-ddk-init-t","--template"],[0,3,1,"cmdoption-ddk-init-e","-e"],[0,3,1,"cmdoption-ddk-init-t","-t"],[0,3,1,"cmdoption-ddk-init-arg-NAME","NAME"]],ddk:[[0,3,1,"cmdoption-ddk-debug","--debug"],[0,3,1,"cmdoption-ddk-debug","--no-debug"],[0,3,1,"cmdoption-ddk-version","--version"]]},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","property","Python property"],"3":["std","cmdoption","program option"]},objtypes:{"0":"py:class","1":"py:method","2":"py:property","3":"std:cmdoption"},terms:{"1":[0,6,7,12],"10":12,"111111111111":0,"120":[7,12],"1984":0,"2":[6,7],"222222222222":0,"256":[7,12],"3":[6,7],"30":6,"class":[2,3,4,5,6,7,8,9,10,11,12],"default":[0,3,4,5,6,7,8,9,11,12],"function":[7,8,9,10,12],"int":[7,12],"new":0,"public":8,"return":[3,4,5,6,7,8,9,10,11,12],"static":[6,7,8,9],"true":[6,8],A:[0,11],For:[6,7,8,9],If:0,It:[3,11,12],The:[0,3,6,7,8,10,11,12],__init__:[2,3,4,5,6,7,8,9,10,11,12],abil:3,abl:3,access:8,access_control:8,account:[0,3,4],acl:8,action:3,add:3,add_check:3,add_security_lint_stag:3,add_source_act:3,add_stag:3,add_synth_act:3,add_test_stag:3,addit:[2,3,6,7,8,9],after:[3,7,12],afterward:10,alia:6,alloc:[7,12],allow:[6,7,8,9],allow_all_outbound:7,allow_public_subnet:7,alwai:[0,6,7],amazon:[2,6,7,8,9,11,12],amazons3:11,amount:[7,12],an:[10,11,12],ani:[0,2,3,4,5,6,7,8,9,10,11,12],api:[6,7,8,9],app:3,appli:[0,8,9],applic:[2,3],approv:[0,3],ar:[0,3,6,7,8,9,10,11,12],arg:[0,2,3,10,11,12],argument:[0,2,6,7,10],arn1:0,arn2:0,arn:[0,2],artifact:3,artifactori:3,assembl:[0,3],associ:11,attach:0,attribut:[2,3,10,11,12],auto_delete_object:8,avoid:3,aw:[0,2,4,6,7,8,9,11,12],aws_cdk:[2,3,4,6,7,8,9,10,11,12],aws_cloudtrail:11,aws_ddk:13,aws_ddk_cor:13,aws_ev:[10,11,12],aws_iam:[3,7,12],aws_km:6,aws_lambda:[7,12],aws_s3:[8,11],aws_sq:[7,9,12],aws_stepfunct:10,bandit:3,base:[3,11,13],batch_siz:12,been:6,befor:[6,12],being:12,best:3,block:[3,8],block_public_access:8,blockpublicaccess:8,bool:[2,3,6,7,8,12],bootstrap:2,both:10,boundari:[0,2],branch:3,broaden:0,bucket:[3,8,9,11],bucket_nam:[8,11],bucket_owner_full_control:8,bucket_prop:8,bucketaccesscontrol:8,bucketencrypt:8,build:3,builder:3,call:[3,7,12],can:[3,5,8,12],captur:11,cd:3,cdk:[0,2,3,4,6,7,8,9],cdk_version:4,cfn:3,chang:0,check:3,chunki:3,ci:3,cicd:13,cicdpipelin:3,cli:0,cloud:[0,3],cloud_assembly_file_set:3,cloudform:6,cloudtrail:11,cmk:6,code:[0,3,7,12],codeartifact:3,codeartifact_domain:3,codeartifact_domain_own:3,codeartifact_repositori:3,codebuildstep:3,codecommit:3,codepipelinesourc:3,com:[2,6,7,8,9,11],command:[0,3],complet:[6,7,8,9],config:[3,13],config_strategi:4,configstrategi:4,configur:[2,3,4,5,6,7,8,9],connect:[3,12],construct:[2,3,6,7,8,9,10,11,12],constructor:3,contain:[0,3,4,5,10],content:9,content_based_dedupl:9,continu:3,costcent:0,crawler:10,crawler_nam:10,creat:[2,3,4,6,7,8,9,10,11],credenti:0,d:0,dai:6,data_key_reus:9,datastag:10,ddk:[3,5,6,7,8,9,10,11,12],dead:12,dead_letter_queu:[7,9],dead_letter_queue_en:[7,12],deadletterqueu:[9,12],debug:0,defaultstacksynthes:2,defin:[2,3,6,7,8,9,10,11,12],delet:6,deliveri:3,delivery_delai:9,depend:[6,7,8,9],deploi:3,deploy:0,dequeu:[9,12],describ:[10,11,12],descript:[0,7],determin:[4,7,12],dev:[0,3],devstag:3,dict:[4,10],dictionari:[4,5],differ:5,dir:0,directori:0,dlq:[7,12],doc:[2,6,7,8,9,11],document:[6,7,8,9],domain:3,durat:[6,7,12],dure:3,e:[0,3],east:0,enabl:[7,11,12],enable_key_rot:6,encrypt:[3,6,8,9],enforc:8,enforce_ssl:8,ensur:3,env:[3,4],env_config:4,environ:[0,2,3,4,6,7,8,9,10,11,12],environment_id:[2,3,4,6,7,8,9,10,11,12],even:0,event:[10,11,12],event_nam:11,event_pattern:[10,11,12],eventpattern:[10,11,12],exampl:3,execut:[7,12],exit:0,explicit:[6,7],f:0,factori:[6,7,8,9],fals:[0,3,7,12],featur:3,file:[0,3,5,6,7,8,9],fn:7,follow:[6,7],forc:0,form:4,framework:0,from:[0,2,3,4,5,6,7,8,9,12],function_nam:7,function_prop:7,g:[0,3],get:[4,5,10,11,12],get_cdk_vers:4,get_config:5,get_env:4,get_env_config:4,get_event_pattern:[10,11,12],get_resource_config:4,get_tag:4,get_target:[10,11,12],git:0,given:[4,5],glue:10,grant:8,guid:2,ha:6,handler:[7,12],have:8,he:12,hope:3,how:4,html:[2,6,7,8,9,11],http:[2,6,7,8,9,11],i:0,iam:0,iam_polici:0,ibucket:[8,11],id:[0,2,3,4,6,7,8,9,10,11,12],ident:0,identifi:[2,3,4,6,7,8,9,10,11,12],ifilesetproduc:3,ifunct:[7,12],ikei:6,implement:[11,12],includ:[2,3,6,7,8,9],index:13,indic:6,infer:0,info:11,infrastructur:3,inherit:2,input:[10,11,12],instanc:[3,4],integr:3,interfac:3,invoc:12,invok:[10,11,12],iqueu:[7,9,12],irol:[7,12],iruletarget:[10,11,12],job:10,job_arg:10,job_nam:10,json:[3,4,5,6,7,8,9],jsonconfigstrategi:4,kei:[3,5,6,9,11],key_prefix:11,key_prop:6,kind:8,km:[3,6],kms_manag:9,kwarg:[2,3,10,11,12],lambda:[7,12],latest:11,letter:12,level:[2,11],lint:3,list:[0,3,6,7,8,9,10,11,12],load:5,loc:3,local:0,log:[0,11],machin:10,main:3,manag:[0,2,6],manual:[0,3],manual_approv:3,match:[10,11,12],max_event_ag:7,max_message_size_byt:9,max_receive_count:12,maximum:12,mb:[7,12],memori:[7,12],memory_s:[7,12],messag:[9,12],method:[2,3,4,5,6,7,8,9,10,11,12],modifi:3,modul:13,move:12,multi:2,multipl:3,must:10,mutat:3,my:3,mypipelin:3,nag:3,name:[0,3,7,8,9,10,11,12],need:0,never:0,non:3,none:[0,2,3,4,5,6,7,8,9,10,11,12],number:[6,9,12],o:0,object:[7,11,12],off:0,option:[0,2,3,4,6,7,8,9,10,11,12],order:[6,7],otherwis:[3,6,7],output:[0,10,11,12],output_dir:0,overrid:3,owner:3,p:0,page:13,param:3,paramet:[2,3,4,5,6,7,8,9,10,11,12],path:5,pattern:[10,11,12],pending_window:6,perform:0,period:6,permiss:[0,2,8],permissions_boundari:0,permissions_boundary_arn:2,pipelin:[3,13],pipeline_nam:3,polici:[0,2,3,8,9],policystat:3,possibl:3,practic:3,pre:10,predefin:8,prefer:[6,7],prefix:[0,11],privat:3,process:12,produc:[3,10,11,12],profil:[0,7],project:0,properti:[3,6,7,8,9,10,11,12],protect:2,provid:[0,4],pull:3,pytest:3,python:[0,6,7,8,9],python_3_9:12,qualifi:0,queue:[7,9,12],queue_nam:9,queue_prop:9,queueencrypt:9,r:0,read:[4,5],receive_message_wait_tim:9,record:12,refer:[6,7,8,9],region:[0,4],remov:[6,8,9],removal_polici:[6,8,9],removalpolici:[6,8,9],repo:[3,4,5],repositori:3,repository_nam:3,repres:[4,10,11,12],request:8,requir:0,require_approv:0,reserved_concurrent_execut:7,resourc:[0,4,13],respect:[6,7],retain:[6,8,9],retention_period:9,retriev:12,retry_attempt:7,reus:3,role:[0,3,7,12],role_policy_stat:3,root:[4,5,11],rotat:[3,6],rout:[10,11,12],rule:[10,11,12],run:[3,10],runtim:[7,12],s3:[8,11],s3_manag:8,s:[10,11,12],save:3,scm:3,scope:[2,3,6,7,8,9,10,11,12],search:13,second:[7,12],secur:[0,3],select:[10,11,12],self:3,send:9,sensit:0,server:8,servic:[6,8,9],set:[2,3],sever:3,sh:3,should:[0,3,4,6,8,10,11,12],show:0,side:8,simpl:[8,9],singl:12,some:3,sourc:[0,3,7,12],source_act:3,specif:[0,3],specifi:[5,6,8],sq:[7,9,12],ssl:[3,8],stack:[0,2,3,6,8,9],stage:[3,13],stage_id:3,stage_nam:3,start:3,state:10,state_machin:10,state_machine_input:10,statemachin:10,step:10,storag:8,str:[2,3,4,5,6,7,8,9,10,11,12],strategi:4,structur:[0,3,10,11,12],support:[6,7,8,9],synth:3,synth_act:3,synthes:[0,2,3],system:0,t:0,tag:[0,2,4],tag_kei:4,target:[10,11,12],templat:0,termin:[2,7,12],termination_protect:2,test:3,thei:9,them:[3,10,11,12],thi:[2,3,6,7,8,9,10,11,12],time:[7,9,12],timeout:[7,12],trace:7,track:11,trail:11,trail_bucket:11,transform:[10,12],trust:0,trusted_account:0,turn:[0,8],type:[3,4,5,6,7,8,9,10,11,12],unsuccessfulli:[9,12],url:0,us:[0,4,5,6,7,8,9,10,11,12],user:3,userguid:11,v2:[2,6,7,8,9],valu:[4,6,7],version:[0,4,8],via:3,visibility_timeout:[9,12],wait:6,were:9,what:[0,9,10,11,12],when:[6,8,9,10,11,12],where:[0,4],whether:[6,8,9],which:[2,3,6,7,8,9,10,11,12],within:[2,3,6,7,8,9,10,11,12],your:[0,3]},titles:["aws_ddk package","aws_ddk_core package","aws_ddk_core.base.BaseStack","aws_ddk_core.cicd.CICDPipelineStack","aws_ddk_core.config.Config","aws_ddk_core.config.JSONConfigStrategy","aws_ddk_core.resources.KMSFactory","aws_ddk_core.resources.LambdaFactory","aws_ddk_core.resources.S3Factory","aws_ddk_core.resources.SQSFactory","aws_ddk_core.stages.GlueTransformStage","aws_ddk_core.stages.S3EventStage","aws_ddk_core.stages.SqsToLambdaStage","AWS DDK API Documentation"],titleterms:{api:13,aw:13,aws_ddk:0,aws_ddk_cor:[1,2,3,4,5,6,7,8,9,10,11,12],base:[1,2],basestack:2,bootstrap:0,cicd:[1,3],cicdpipelinestack:3,config:[1,4,5],creat:0,ddk:[0,13],deploi:0,document:13,gluetransformstag:10,indic:13,init:0,jsonconfigstrategi:5,kmsfactori:6,lambdafactori:7,packag:[0,1,13],pipelin:1,repositori:0,resourc:[1,6,7,8,9],s3eventstag:11,s3factori:8,sqsfactori:9,sqstolambdastag:12,stage:[1,10,11,12],tabl:13}})