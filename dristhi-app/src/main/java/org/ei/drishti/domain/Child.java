package org.ei.drishti.domain;

import org.apache.commons.lang3.builder.EqualsBuilder;
import org.apache.commons.lang3.builder.HashCodeBuilder;
import org.apache.commons.lang3.builder.ToStringBuilder;

import java.util.Map;

public class Child {
    private final String caseId;
    private final String motherCaseId;
    private String thayiCardNumber;
    private String dateOfBirth;
    private final String gender;
    private final Map<String, String> details;
    private boolean isClosed;

    public Child(String caseId, String motherCaseId, String thayiCardNumber, String dateOfBirth, String gender, Map<String, String> details) {
        this.caseId = caseId;
        this.motherCaseId = motherCaseId;
        this.thayiCardNumber = thayiCardNumber;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.details = details;
        this.isClosed = false;
    }

    public Child(String caseId, String motherCaseId, String gender, Map<String, String> details) {
        this.caseId = caseId;
        this.motherCaseId = motherCaseId;
        this.gender = gender;
        this.details = details;
    }

    public String caseId() {
        return caseId;
    }

    public String motherCaseId() {
        return motherCaseId;
    }

    public String thaayiCardNumber() {
        return thayiCardNumber;
    }

    public String dateOfBirth() {
        return dateOfBirth;
    }

    public String gender() {
        return gender;
    }

    public Map<String, String> details() {
        return details;
    }

    public Map<String, String> detailsAsMap() {
        return details;
    }

    public boolean isHighRisk() {
        return "yes".equals(details.get("isHighRiskChild"));
    }

    public boolean isClosed() {
        return isClosed;
    }

    public Child setIsClosed(boolean isClosed) {
        this.isClosed = isClosed;
        return this;
    }

    public Child setThayiCardNumber(String thayiCardNumber) {
        this.thayiCardNumber = thayiCardNumber;
        return this;
    }

    public Child setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
        return this;
    }

    public String getDetail(String name) {
        return details.get(name);
    }

    @Override
    public boolean equals(Object o) {
        return EqualsBuilder.reflectionEquals(this, o);
    }

    @Override
    public int hashCode() {
        return HashCodeBuilder.reflectionHashCode(this);
    }

    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }
}
