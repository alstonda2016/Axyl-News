/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class articleObject {
    /*
    var strURL = ""
    var strArticleHeadline = ""
    
    var articleBias = 0
    
    var strPicURL = ""
    var strPicSource = ""
    var articleTopic = ""
    var articleID = ""
    var strArticleAuthor = ""
    var articlePublisher = ""
    var articlePicDisplayType = "norm"
    
    var articleTime = 0
    //long
    var rundownCount = 3
    
    var strRundownPoint1 = ""
    var strRundownPoint2 = ""
    var strRundownPoint3 = ""
    var strRundownPoint4 = ""
    var strRundownPoint5 = ""
    
    var proposalAuthorID = ""
    var proposalAuthorName = ""
    var isActive = true
    
    */
    
    
    /*
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  
  */
  
   constructor(
        strURL,
        strArticleHeadline,
        strPicURL,
        strPicSource,
        articleBias,articleTopic ,articleID, strArticleAuthor, 
        articleTime, aticlePublisher, articlePicDisplayType, rundownCount, 
        strRundownPoint1, strRundownPoint2, strRundownPoint3, strRundownPoint4,
        strRundownPoint5 , proposalAuthorID, proposalAuthorName,isActive, articleType, articleVersionNum) {
        this.strURL = strURL
        this.strPicURL = strPicURL
        this.strPicSource = strPicSource
        this.articleBias = articleBias
        this.strArticleHeadline = strArticleHeadline
        this.articleTopic = articleTopic
        this.articleID = articleID
        this.strArticleAuthor = strArticleAuthor
        this.articleTime = articleTime
        this.articlePublisher = articlePublisher
        this.articlePicDisplayType = articlePicDisplayType
        
        this.rundownCount = rundownCount
        this.strRundownPoint1 = strRundownPoint1
        this.strRundownPoint2 = strRundownPoint2
        this.strRundownPoint3 = strRundownPoint3
        this.strRundownPoint4 = strRundownPoint4
        this.strRundownPoint5 = strRundownPoint5
        this.proposalAuthorID = proposalAuthorID
        this.proposalAuthorName = proposalAuthorName
        this.isActive = isActive
        this.articleType = articleType
        this.articleVersionNum = articleVersionNum

        
    }
  
  
  
}

