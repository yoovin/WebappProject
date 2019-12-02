import React, { Component } from 'react'
import Axios from 'axios'

export default class Publication extends Component {

  state = {
    pub:''
  }

  componentWillMount(){
      Axios.get('/api/getPublication')
    .then(res=>this.setState({pub:res.data}))
    .catch(err=>console.error(err))
  }

    render() {
        return (
            <div class="rightside">
                <div class="publication">
      <h2 class="h2-research"> Publication</h2>
                    <hr class="hr-research" />
                    
      <div class="publications_nav">
        <nav>
          <a href="#publication_type1" class="nav_box">International Conference</a>
          <a href="#publication_type2" class="nav_box">International Journal</a>
          <a href="#publication_type3" class="nav_box">Domestic Conference</a>
          <a href="#publication_type4" class="nav_box">Domestic Journal</a>
        </nav>
      </div>

      <h3><a name = "publication_type1">International Conference</a></h3>
      <div class = "publication_list">
              {this.state.pub ? this.state.pub.map((row)=>{
                if(row.trans === "International Conference"){
                  return (
                    <a href={row.url}><p class = "box">{row.sector}<br/>{row.desc}</p></a>
                  )}
                }):'Loading'}

        {/* <a href="https://selab.hanyang.ac.kr/publications/papers/International_Conference/[IP]_Zhiqiang1.pdf"><p class = "box">Zhiqiang Wu, Xin Chen and Scott Uk-Jin Lee, "Identifying Latent Android Malware from Application's Description using LSTM," In Proc. International Conference on Information, System and Convergence Applications
          <br/>2019, pp.40-42.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Conference/[IP]_Mohsin0.pdf"><p class = "box">Mohsin Javaid Siddiqui, Xintao Li, Isma Farah Siddiqui, Asad Abbas and Scott Uk-Jin Lee, "Comparative Analysis of GUI Development for Android Application by utilizing MDA Approach," In Proc. International workshop on convergence information technology
          <br/>2017, 2017, pp.151-154.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Conference/[IP]_Zhiqiang0.pdf"><p class = "box">Zhiqiang Wu, Asad Abbas and Scott Uk-Jin Lee, "Multiple Concurrency Anomalies classification for Mobile Applications using Support Vector Machine," In Proc. International Conference on Computing Convergence and Applications (ICCCA)
          <br />2018, pp.103-106.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Conference/[IP]_Asad4.pdf"><p class = "box">Asad Abbas, Zhiqiang Wu, Mohsin Javid Siddiqui, Isma Farah Siddiqui and Scott Uk-Jin Lee, "Contextual Variability Management of Multi-Software Product Line," In Proc. International Conference on Computing Convergence and Applications 2017
          <br />2017, pp.71-74.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Conference/[IP]_I.F.0.pdf"><p class = "box">Isma Farah Siddiqui, Nawab Muhammad Faseeh Qureshi, Muhammad Akram Shaikh, Bhawani Shankar Chowdhry, Asad Abbas and Scott Uk-Jin Lee, "Knowledge-based stuck-at fault analysis for wireless IoT smart meters in smart grid," In Proc. 2nd Global Conference on Wireless and optical Communications
          <br />2017</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Conference/[IP]_Asad3.pdf"><p class = "box">Asad Abbas, Hyung-Lak Kim, Isma Farah Siddiqui, Ali Kashif Bashir and Scott Uk-Jin Lee, "Contextual Variability Management of IoT Applications Using Agent-Base Modeling with Software Product Line," In Proc. International Conference on Computing Convergence and Applications 2017
          <br />2017, pp.13-16.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Conference/[IP]_Asad2.pdf"><p class = "box">Asad Abbas, Isma Farah Siddiqui and Scott Uk-Jin Lee, "XML-based Feature Modeling of IoT Applications," In Proc. International Conference on Computing Convergence and Applications (ICCCA)
          <br />2016, pp.163-166.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Conference/[IP]_Asad1.pdf"><p class = "box">Asad Abbas, Zhiqiang Wu, Isma Farah Siddiqui and Scott Uk-Jin Lee, "Challenges of Multi-Objective Optimization in Feature Model of Software Product Line," In Proc. 3rd International Conference on Information, System and Convergence Applications 2016
          <br/> 2016, pp.15-17.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Conference/[IP]_Abdul1.pdf"><p class = "box">Abdul Rahim Mohamed Ariffin and Scott Uk-Jin Lee, "Generic Modeling for Pthreads with Cilk," In Proc. 3rd International Conference on Information, System and Convergence Applications 2016
          <br/> 2016, pp.30-32.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Conference/[IP]_Isma3.pdf"><p class = "box">Isma Farah Siddiqui, Asad Abbas and Scott Uk-Jin Lee, "HBAC: An access control over Semantics-enabled Smart Grids to enable energy-efficiency and lifetime optimization," In Proc. 2nd International Conference on Information and Convergence Technology for Smart Society 2016
          <br/> 2016, pp.9-11.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Conference/[IP]_Asad0.pdf"><p class = "box">Asad Abbas, Zhiqiang Wu, Isma Farah Siddiqui and Scott Uk-Jin Lee, "Optimized feature selection with crosscutting concerns in software product line feature model," In Proc. 2nd International Conference on Information and Convergence Technology for Smart Society 2016
          <br/> 2016, pp.1-3.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Conference/[IP]_Isma2.pdf"><p class = "box">Isma Farah Siddiqui and Scott Uk-Jin Lee, "Privacy-Aware Smart Learning: Providing XACML as a Service in Semantic Web based Smart Environment," In Proc. 7th International Conference on Internet Symp.
          <br/> 2015, pp.97-101.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Conference/[IP]_Abdul0.pdf"><p class = "box">Abdul Rahim Mohamed Ariffin, Isma Farah Siddiqui, Gayeon Kim and Scott Uk-Jin Lee, "A Survey on Correctness Properties for Multithreaded Applications," In Proc. 2nd International Conference on Information and Convergence Technology for Smart Society 2015
          <br/> 2015, pp.1-3.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Conference/[IP]_Gayeon0.pdf"><p class = "box">Gayeon Kim, Abdul Rahim Mohomed Ariffin and Scott Uk-Jin Lee, "An Effective Approach for Parallel Processing with Multiple Microcontrollers," In Proc. 2nd International Conference on Information, System and Convergence Applications 2015
          <br/> 2015, pp.142-145.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Conference/[IP]_Isma1.pdf"><p class = "box">Isma Farah Siddiqui and Scott Uk-Jin Lee, "A Novel Approach for Integrating Semantic Web Techniques into Smart Education Enviroment," In Proc. 1st International Conference on Information and Convergence Technology for Smart Society 2015
          <br/> 2015, pp.127-131.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Conference/[IP]_Jaeho0.pdf"><p class = "box">Jaeho Choi and Scott Uk-Jin Lee, "Vulnerability of Web-Storage in HTML5 for Web and Mobile Application," In Proc. 3rd Advances in Computing and Information Technology 2014
          <br/> 2014, pp.112-115.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Conference/[IP]_Isma0.pdf"><p class = "box">Isma Farah Siddiqui, Nawab Muhammad Faseeh, Scott Uk-Jin Lee and Mukhtiar Ali Unar, "An Advanced Hyper-Efficient Design to Detect Random Peer-to-Peer Botnets," In Proc. 3rd International Multi-Topic Conference 2013
          <br/> 2013, pp.251-258.</p></a> */}
      </div>
      <h3><a name = "publication_type2">International Journal</a></h3>
      <div class = "publication_list">
      {this.state.pub ? this.state.pub.map((row)=>{
                if(row.trans === "International Journal"){
                  return (
                    <a href={row.url}><p class = "box">{row.sector}<br/>{row.desc}</p></a>
                  )}
                }):'Loading'}
        {/* <a href="https://selab.hanyang.ac.kr/publications/papers/International_Journal/[IJ]_Isma4.pdf"><p class = "box">Isma Farah Siddiqui, Nawab Muhammad Faseeh Qureshi, Muhammad Akram Shaikh, Bhawani Shankar Chowdhry, Asad Abbas, Ali Kashif Bashir and Scott Uk-Jin Lee, "Stuck-at Fault Analytics of IoT Devices Using Knowledge-based Data Processing Strategy in Smart Grid," J. Wireless Personal Communications
          <br />vol. 2018, pp. 1-15, Apr. 2018.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Journal/[IJ]_Asad5.pdf"><p class = "box">Asad Abbas, Isma Farah Siddqui, Scott Uk-Jin Lee, Ali Kashif Bashir, Waleed Ejaz and Nawab Muhammad Faseeh Qureshi, "Multi-Objective Optimum Solutions for IoT-Based Feature Models of Software Product Line," J. IEEE Access
          <br />vol. 6, pp. 12228-12239, Mar. 2018.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Journal/[IJ]_Zhiqiang0.pdf"><p class = "box">Zhiqiang Wu, Asad Abbas, Xin Chen and Scott Uk-Jin Lee, "classification of concurrent anomalies for iot software based support vector machine," J. Journal of Theoretical and Applied Information Technology
          <br/>vol. 95, no. 3, pp. 832-842, Feb. 2018.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Journal/[IJ]_Isma3.pdf"><p class = "box">Isma Farah Siddiqui, Scott Uk-Jin Lee, Asad Abbas and Ali Kashif Bashir, "Optimizing Lifeclass and Energy Consumption by Smart Meters in Green-Cloud-Based Smart Grids," J. IEEE Access, vol. 5, pp. 20934-220945
          <br />2017.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Journal/[IJ]_Isma2.pdf"><p class = "box">Isma Farah SIddiqui, Nawab Muhammad Faseeh Qureshi, Scott Uk-Jin Lee, Mukhtiar Ali Unar. "An advanced hyper-efficient design to detect random peer-to-peer botnets." Communications in Computer and Information Science
          <br />vol 414, pp. 251-258, 2014.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Journal/[IJ]_Asad4.pdf"><p class = "box">Asad Abbas, Isma Farah Siddqui, Scott Uk-Jin Lee, and Ali Kashif Bashir. "Binary Pattern for Nested Cardinality Constraints for Software Product Line of IoT-based Feature Models." IEEE Access
          <br />vol. 5, pp. 3971-3980, Mar.2017.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Journal/[IJ]_ASAD3.pdf"><p class = "box">ASAD ABBAS, ISMA FARAH SIDDIQUI and SCOTT UK-JIN LEE, "CONTEXTUAL VARIABILITY MANAGEMENT OF IOT APPLICATION WITH XML-BASED FEATURE MODELLING," J. Journal of Theoretical and Applied Information Technology
          <br />vol. 95, no. 6, pp. 1300-1308, Mar. 2017.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Journal/[IJ]_Isma1.pdf"><p class = "box">Isma Farah Siddiqui, Asad Abbas, Abdul Rahim Mohamed Ariffin and Scott Uk-Jin Lee, "A Comparative Study of Multithreading APIs for Software of ICT Equipment," J. Indian Journal of Science and Technology
          <br/>vol. 9, no. 48, pp. 1-5, Dec. 2016.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Journal/[IJ]_ISMA0.pdf"><p class = "box">ISMA FARAH SIDDIQUI, ASAD ABBAS and SCOTT UK-JIN LEE, "A HIDDEN MARKOV MODEL TO PREDICT HOT SOCKET ISSUE IN SMART GRID," J. Journal of Theoretical and Applied Information Technology
          <br />vol. 94, no. 2, pp. 408-415, Dec. 2016.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Journal/[IJ]_ASAD2.pdf"><p class = "box">ASAD ABBAS, ISMA FARAH SIDDIQUI and SCOTT UK-JIN LEE, "GOAL-BASED MODELING FOR REQUIREMENT TRACEABILITY OF SOFTWARE PRODUCT LINE," J. Journal of Theoretical and Applied Information Technology
          <br />vol. 94, no. 2, pp. 327-334, Dec. 2016.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Journal/[IJ]_Asad1.pdf"><p class = "box">Asad Abbas, Isma Farah Siddiqui and Scott Uk-Jin Lee, "Multi-Objective Optimization of Feature Model in Software Product Line: Perspectives and Challenges," J. J. Indian Journal of Science and Technology
          <br />vol. 9, no. 45, pp. 1-7, Dec. 2016.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Journal/[IJ]_Abdul0.pdf"><p class = "box">Abdul Rahim Mohamed Ariffin, Isma Farah Siddiqui and Scott Uk-Jin Lee, "An Empirical Study over Correctness Properties for Multithreaded Programs," J. Indian Journal of Science and Technology
          <br />vol. 9, pp. 1-8, May 2016.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Journal/[IJ]_Asad0.pdf"><p class = "box">Asad Abbas, Zhiqiang Wu, Isma Farah Siddiqui and Scott Uk-Jin Lee, "An Approach for Optimized Feature Selecton in Software Product Lines using Union-Find and Genetic Algorithms," J. Indian Journal of Science and Technology
          <br />vol. 9, pp. 1-9, May 2016.</p></a> */}
        </div>
      <h3><a name = "publication_type3">Domestic Conference</a></h3>
      <div class = "publication_list">
      {this.state.pub ? this.state.pub.map((row)=>{
                if(row.trans === "Domestic Conference"){
                  return (
                    <a href={row.url}><p class = "box">{row.sector}<br/>{row.desc}</p></a>
                  )}
                }):'Loading'}
        {/* <a href="https://selab.hanyang.ac.kr/publications/papers/Domestic_Conference/[DP]_Zhiqiang2.pdf"><p class = "box">Zhiqiang Wu, Xin Chen and Scott Uk-Jin Lee, "Permissions based Automatic Android Malware Repair using Long Short Term Memory," In Proc. 한국컴퓨터정보학회 동계학술대회
          <br />2019, pp.387-388.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/Domestic_Conference/[DP]_YongTaek0.pdf"><p class = "box">YongTaek Oh and Scott Uk-Jin Lee, "XACML 정책 작성시 요청에 따른 효과적인 정책 평가 요인 수집 방법," In Proc. Korea Software Congress 2017
          <br />2017, pp.443-445.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/Domestic_Conference/[DP]_Hakjin0.pdf"><p class = "box">Hakjin Lee and Scott Uk-Jin Lee, "라즈베리파이 기반 기능성 게임 개발을 위한 모바일 플랫폼," In Proc. Korea Software Congress 2017
          <br />2017, pp.586-588.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/Domestic_Conference/[DP]_HyungLak1.pdf"><p class = "box">HyungLak Kim and Scott Uk-Jin Lee, "Automated Verification Method for Java-based Multithreaded Software," In Proc. 16th Korea Computer Congress
          <br />2016, pp.416-418.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/International_Conference/[IP]_Isma4.pdf"><p class = "box">Isma Farah Siddiqui, Asad Abbas and Scott Uk-Jin Lee, "Comparative Analysis of Centralized Vs. Distributed Locality-based Repository over IoT-Enabled Big Data in Smart Grid Environment," In Proc. 한국컴퓨터정보학회 동계학술대회
          <br />2017, pp.75-78.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/Domestic_Conference/[DP]_Asad2.pdf.pdf"><p class = "box">Asad Abbas, Isma Fara Siddiqui and Scott Uk-Jin Lee, "Feature Modeling with Multi-Software Product Line of IoT Protocols," In Proc. 한국컴퓨터정보학회 동계학술대회
          <br />2017, pp.79-82.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/Domestic_Conference/[DP]_Hyunglak0.pdf"><p class = "box">Hyunglak Kim and Scott Uk-Jin Lee, "Improvement of Crowdsourcing based Software Development Process," In Proc. 18th Korea Computer Congress
          <br />2016, pp.654-656.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/Domestic_Conference/[DP]_Gayeon0.pdf"><p class = "box">Gayeon Kim and Scott Uk-Jin Lee, "The Necessity of Multithread Feature in Node.js," In Proc. 18th Korea Computer Congress
          <br />2016, pp.672-674.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/Domestic_Conference/[DP]_Zhiqiang1.pdf"><p class = "box">Zhiqiang Wu and Scott Uk-Jin Lee, "The Application of Banker's Algorithm in Order Scheduling Management for Deadlock Avoidance," In Proc. 18th Korea Computer Congress
          <br />2016, pp.660-662.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/Domestic_Conference/[DP]_Zhiqiang0.pdf"><p class = "box">Zhiqiang Wu, Seon-Woong Kim, Abdul Rahim Mohamed Ariffin and Scott Uk-Jin Lee, "An Efficient Attendance Management System Based on Browser/Server Technique," In Proc. 18th Korea Computer Congress
          <br />2015, pp.505-507.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/Domestic_Conference/[DP]_Asad1.pdf"><p class = "box">Asad Abbas, Isma Farah Siddiqui, Gayeon Kim and Scott Uk-Jin Lee, "Aspect-Oriented Programing based Process Synchronization in Concurrent Systems," In Proc. 18th Korea Computer Congress
          <br />2015, pp.502-504.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/Domestic_Conference/[DP]_Abdul0.pdf"><p class = "box">Abdul Rahim Mohomed Ariffin, Gayeon Kim and Scott Uk-Jin Lee, "Comparative Analysis on Tools for Verifying Multithreaded Applications," In Proc. 18th Korea Computer Congress
          <br />2015, pp.470-472.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/Domestic_Conference/[DP]_Seon-Woong0.pdf"><p class = "box">Seon-Woong Kim, Byeong-Jin Park and Scott Uk-Jin Lee, "Recent Trends of Fintech and Comparative Analysis Samsung-Pay and Apple-Pay," In Proc. 17th Korea Computer Congress
          <br />2015, pp.2054-2056.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/Domestic_Conference/[DP]_Asad0.pdf"><p class = "box">Asad Abbas, Isma Farah Siddiqui and Scott Uk-Jin Lee, "XML-based Feature Modeling for Variability Management in Complex Software Product Line," In Proc. 17th Korea Computer Congress
          <br />2015, pp.582-584.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/Domestic_Conference/[DP]_Da-Hae0.pdf"><p class = "box">Da-Hae Sung and Scott Uk-Jin Lee, "Editor Feature to Effectively Mange Source Code Modification," In Proc. Korean Institute of Information Scientists and Engineers Conf. 2014
          <br />2014, pp.1696-1698.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/Domestic_Conference/[DP]_Geunhwan0.pdf"><p class = "box">Geunhwan Park and Scott Uk-Jin Lee, "Management System and Mobile Application to Improve Efficiency and Reliability of Vehicle Service Center," In Proc. Korean Institute of Information Scientists and Engineers Conf. 2014
          <br />2014, pp.1554-1556.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/Domestic_Conference/[DP]_Isma0.pdf"><p class = "box">Isma Farah Siddiqui and Scott Uk-Jin Lee, "A Framework for Verifyin Consistency of SQL-DB Ontology using Alloy," In Proc. 16th Korea Computer Congress
          <br />2014, pp.497-499.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/Domestic_Conference/[DP]_Jiang1.pdf"><p class = "box">Jiang Hua and Scott Uk-Jin Lee, "Extend the Mind Map propose a requirements specification and analysis tools," In Proc. 16th Korea Conference on Software Engineering
          <br />2014, pp.353-356.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/Domestic_Conference/[DP]_Jaeho1.pdf"><p class = "box">Jaeho Choi and Scott Uk-Jin Lee, "XACML policy view to create policies for efficient access control," In Proc. 16th Korea Conference on Software Engineering
          <br />2014, pp.457-460.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/Domestic_Conference/[DP]_Jiang0.pdf"><p class = "box">Jiang Hua and Scott Uk-Jin Lee, "Extended Mind Map for Software Requirement Specification," In Proc. 15th Korea Computer Congress
          <br />2013, pp.517-519.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/Domestic_Conference/[DP]_Jaeho0.pdf"><p class = "box">Jaeho Choi and Scott-Uk-Jin Lee, "Vulnerability of Web-Storage in HTML5," In Proc. In Proceedings of the 15th Korea Computer Congress
          <br />2013, pp.715-717.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/Domestic_Conference/[DP]_Jaejin1.pdf"><p class = "box">Jaejin Kim and Scott Uk-Jin Lee, "Conflict Detection for XACML Policies," In Proc. 15th Korea Computer Congress
          <br />2013, pp.550-552.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/Domestic_Conference/[DP]_Jaejin0.pdf"><p class = "box">Jaejin Kim, Scott Uk-Jin Lee and Amna Al Dhaheri, "Integrated Access Control Model Propose In Cloud Computing Environment," In Proc. 15th Korea Conference on Software Engineering
          <br />2013, pp.266-269.</p></a> */}
        </div>
      <h3><a name = "publication_type4">Domestic Journal</a></h3>
      <div class = "publication_list">
      {this.state.pub ? this.state.pub.map((row)=>{
                if(row.trans === "Domestic Journal"){
                  return (
                    <a href={row.url}><p class = "box">{row.sector}<br/>{row.desc}</p></a>
                  )}
                }):'Loading'}
        {/* <a href="https://selab.hanyang.ac.kr/publications/papers/Domestic_Journal/[DJ]_Youn-geun0.pdf"><p class = "box">Youn-geun Ahn, Gichan Lee and Scott Uk-Jin Lee, "Effective Methodology for Collecting Contextual Factors and Information that Affects The XACML Policy Evaluation," J. KIISE Transactions on Computing Practices
          <br/>vol. 24, no. 2, pp. 82-87, Feb. 2018.</p></a>
        <a href="https://selab.hanyang.ac.kr/publications/papers/Domestic_Journal/[DJ]_Isma0.pdf"><p class = "box">Isma Farah Siddiqui and Scott Uk-Jin Lee, "Access Control as a Service for Information Protection in Semantic Web based Smart Environment," J. Journal of Korean Society for Internet Information
          <br />vol. 17, no. 5, pp. 9-16, Oct. 2016.</p></a> */}
      </div>
    </div>
                </div>
        )
    }
}
